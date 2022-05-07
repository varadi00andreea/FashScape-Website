using Microsoft.EntityFrameworkCore.Migrations;

namespace fashscape.Migrations
{
    public partial class ProductAdd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Size",
                table: "Products",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Description", "Name", "Price", "Size" },
                values: new object[,]
                {
                    { 1, "Popular from the early 1990s to the mid 2000s, baggy jeans are back in style. They have a cool factor to them that makes even the simplest wardrobes come to life.", "Baggy Jeans", 89.989999999999995, "38" },
                    { 2, "Perfect for summer days. Very soft material.", "Casual Dress", 47.0, "Universal" },
                    { 3, "I've recently buyed it but it's not the right size. I have to say it's not very stretchy.", "Pink Crop Top", 62.299999999999997, "S" },
                    { 4, "Perfect for a summerish wedding.", "Gown", 326.99000000000001, "36-38" },
                    { 5, "Form-flattering that provides ultimate comfort in high intensity workout.", "Gym Leggings", 89.900000000000006, "S" },
                    { 6, "Great if you are looking for a fashion forward twist on classic denim jeans.", "Black Flared Jeans", 120.98999999999999, "40" },
                    { 7, "Knee high boots are a staple in every wardrobe.", "Knee High Boots", 200.0, "39" },
                    { 8, "Very nice color. It looks good on anyone.", "Split Maxi Dress", 170.0, "M" },
                    { 9, "High heeled sandals. You can wear them for a casual look or even for a party.", "Sandals", 219.90000000000001, "37" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DropColumn(
                name: "Size",
                table: "Products");
        }
    }
}
