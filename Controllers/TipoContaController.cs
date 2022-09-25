using System.Collections.Generic;
using System.Linq;
using PagueSempre.Models;
using Microsoft.AspNetCore.Mvc;

namespace PagueSempre.Controllers{
    [ApiController]
     [Route("api/TipoConta")]

    public class TipoContaController : ControllerBase{
    private readonly DataContext _context;
    public TipoContaController(DataContext context) => _context = context;
    
    //Get /api/TipoConta/listar
    [Route("listar")]
    [HttpGet]
    public IActionResult Listar() =>
        Ok(_context.TipoConta.ToList());

    //POST /api/TipoConta/criar
    [Route("criar")]
    [HttpPost]
    public IActionResult criar([FromBody] TipoConta tipodeConta){

        _context.TipoConta.Add(tipodeConta);
        _context.SaveChanges();

        return Created("Criado com sucesso!", tipodeConta);
    }
    }

}