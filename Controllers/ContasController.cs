using System.Collections.Generic;
using System.Linq;
using PagueSempre.Models;
using Microsoft.AspNetCore.Mvc;

namespace PagueSempre.Controllers
{
    [ApiController]
    [Route("api/Contas")]

    public class ContasController : ControllerBase
    {
    private readonly DataContext _context;
    public ContasController(DataContext context) => _context = context;
    private static List<Contas> contas = new List<Contas>();

    //Get /api/estoque/listar
    [Route("listar")]
    [HttpGet]
    public IActionResult Listar() =>
        Ok(_context.Contas.ToList());

    //POST /api/estoque/cadastrar
    [Route("cadastrar")]
    [HttpPost]
    public IActionResult Cadastrar([FromBody] Contas contas)
    {
        _context.Contas.Add(contas);
        _context.SaveChanges();
        return Created("", contas);
    }     



    }
}