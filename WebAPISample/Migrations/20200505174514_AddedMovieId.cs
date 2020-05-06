using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPISample.Migrations
{
    public partial class AddedMovieId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Movies",
                table: "Movies");

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DropColumn(
                name: "Id",
                table: "Movies");

            migrationBuilder.AddColumn<int>(
                name: "MovieId",
                table: "Movies",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Movies",
                table: "Movies",
                column: "MovieId");

            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "MovieId", "Director", "Genre", "Title" },
                values: new object[,]
                {
                    { 1, "Martin Scorsese", "Drama", "The Departed" },
                    { 2, "Christopher Nolan", "Drama", "The Dark Knight" },
                    { 3, "Christopher Nolan", "Drama", "Inception" },
                    { 4, "David Gordon Green", "Comedy", "Pineapple Express" },
                    { 5, "John McTiernan", "Action", "Die Hard" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Movies",
                table: "Movies");

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "MovieId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "MovieId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "MovieId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "MovieId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Movies",
                keyColumn: "MovieId",
                keyValue: 5);

            migrationBuilder.DropColumn(
                name: "MovieId",
                table: "Movies");

            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Movies",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Movies",
                table: "Movies",
                column: "Id");

            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "Id", "Director", "Genre", "Title" },
                values: new object[,]
                {
                    { 1, "Martin Scorsese", "Drama", "The Departed" },
                    { 2, "Christopher Nolan", "Drama", "The Dark Knight" },
                    { 3, "Christopher Nolan", "Drama", "Inception" },
                    { 4, "David Gordon Green", "Comedy", "Pineapple Express" },
                    { 5, "John McTiernan", "Action", "Die Hard" }
                });
        }
    }
}
