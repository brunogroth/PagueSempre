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

    //Get /api/contas/listar
    [Route("listar")]
    [HttpGet]
    public IActionResult Listar() =>
        Ok(_context.Contas.ToList());

    //POST /api/contas/cadastrar
    [Route("cadastrar")]
    [HttpPost]
    public IActionResult Cadastrar([FromBody] Contas contas)
    {
        _context.Contas.Add(contas);
        _context.SaveChanges();
        return Created("", contas);
    }

    //Alterar api/contas/alterar
    [Route("alterar")]
    [HttpPatch]
    public IActionResult Alterar([FromBody] Contas contas)     
    {
        _context.Contas.Update(contas);
        _context.SaveChanges();
        return Ok(contas);
    }

    [Route("deletar/{id}")]
    [HttpDelete]
    public IActionResult Deletar([FromRoute] int ID)
    {
        Contas contas = _context.Contas.Find(ID);
        if (contas != null)
        {
            _context.Contas.Remove(contas);
            _context.SaveChanges();
            return Ok(contas);
        }

        return NotFound();
    }

    [HttpGet]
    [Route("list/search/{NomePesquisa}")]

    public IActionResult Pesquisar([FromRoute] string NomePesquisa){

        foreach(Contas Conta in _context.Contas){
            if(NomePesquisa == Conta.Nome){
                return Ok(Conta);
            }
        }
        return NotFound();
        }
    }
}
