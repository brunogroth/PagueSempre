using Microsoft.EntityFrameworkCore.Migrations;

namespace PagueSempre.Migrations
{
    public partial class ForeignKeyTipoConta : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TipoConta",
                table: "Contas",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Contas_TipoConta",
                table: "Contas",
                column: "TipoConta");

            migrationBuilder.AddForeignKey(
                name: "FK_Contas_TipoConta_TipoConta",
                table: "Contas",
                column: "TipoConta",
                principalTable: "TipoConta",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Contas_TipoConta_TipoConta",
                table: "Contas");

            migrationBuilder.DropIndex(
                name: "IX_Contas_TipoConta",
                table: "Contas");

            migrationBuilder.DropColumn(
                name: "TipoConta",
                table: "Contas");
        }
    }
}
