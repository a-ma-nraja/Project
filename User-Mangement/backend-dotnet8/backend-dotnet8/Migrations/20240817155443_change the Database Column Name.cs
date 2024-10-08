﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend_dotnet8.Migrations
{
    /// <inheritdoc />
    public partial class changetheDatabaseColumnName : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IasActive",
                table: "Messages",
                newName: "IsActive");

            migrationBuilder.RenameColumn(
                name: "IasActive",
                table: "Logs",
                newName: "IsActive");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IsActive",
                table: "Messages",
                newName: "IasActive");

            migrationBuilder.RenameColumn(
                name: "IsActive",
                table: "Logs",
                newName: "IasActive");
        }
    }
}
