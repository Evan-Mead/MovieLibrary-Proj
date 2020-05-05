using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPISample.Data;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private ApplicationContext _context;
        private object context;

        public MovieController(ApplicationContext context)
        {
            _context = context;
        }
        // GET api/movie
        [HttpGet]
        public IActionResult Get()
        {
            // Retrieve all movies from db logic
            return Ok(_context.Movies);
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            // Retrieve movie by id from db logic
            // return Ok(movie);
            var movies = _context.Movies.Include(m => m.MovieId).SingleOrDefault(m => m.MovieId == id);

            return Ok(movies);
        }

        // POST api/movie
        [HttpPost]
        public IActionResult Post([FromBody]Movie value)
        {
            // Create movie in db logic
            if (value.MovieId == 0)
            {
                _context.Movies.Add(value);
            }
            else
            {
                var movieInDB = _context.Movies.Single(m => m.MovieId == value.MovieId);
                movieInDB.Title = value.Title;
                movieInDB.Director = value.Director;
                movieInDB.Genre = value.Genre;
            }
            _context.SaveChanges();
            return Ok(value);
        }

        // PUT api/movie
        [HttpPut]
        public IActionResult Put([FromBody] Movie movie)
        {
            // Update movie in db logic
            var movieInDB = _context.Movies.Single(m => m.MovieId == movie.MovieId);
            movieInDB.Title = movie.Title;
            movieInDB.Director = movie.Director;
            movieInDB.Genre = movie.Genre;
            _context.SaveChanges();
            return Ok(movie);
        }

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            // Delete movie from db logic
            var movie = _context.Movies.SingleOrDefault(m => m.MovieId == id);
            _context.Movies.Remove(movie);
            _context.SaveChanges();
            return Ok(movie);
        }
    }
}