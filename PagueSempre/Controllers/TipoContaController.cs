using System.Collections.Generic;
using System.Linq;
using PagueSempre.Models;
using Microsoft.AspNetCore.Mvc;

namespace PagueSempre.Controllers
{
    [ApiController]
     [Route("api/TipoConta")]

    public class TipoContaController : ControllerBase
    {
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
     //PATCH/api/TipoConta/ Alterar
    [Route("alterar")]
    [HttpPatch]
    public IActionResult Alterar ([FromBody] TipoConta AlterarTipoConta)
    {
        _context.TipoConta.Update(AlterarTipoConta);
        _context.SaveChanges();
        return Ok (AlterarTipoConta); 
    }
    //delete/api/tipoconta/deletar
    [Route("deletar/{id}")]
    [HttpDelete]
    public IActionResult Deletar ([FromRoute] int id)
    {
        TipoConta deletarTipoConta = _context.TipoConta.Find(id);
        if(deletarTipoConta != null)
        {
            _context.TipoConta.Remove(deletarTipoConta);
            _context.SaveChanges();
            return Ok (deletarTipoConta);
        }
        return NotFound();
    }
    //pesquisar/api/tipoconta/buscar
    [HttpGet]
    [Route("lista/buscar/{id}")]
    public IActionResult Pesquisar ([FromRoute] int id) {
        foreach (TipoConta TipoConta in _context.TipoConta){
            if(id == TipoConta.ID){
                return Ok (TipoConta);
            }
        }
       return NotFound();
    }  
 }
}