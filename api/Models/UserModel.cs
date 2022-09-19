namespace api.Models;
using System.ComponentModel.DataAnnotations.Schema;

public class UserModel
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    [System.ComponentModel.DataAnnotations.Key, Column(Order = 0)]
    public int? codigo { get; set; }
    public string? usuario { get; set; }
    public DateTime? data_de_cadastro { get; set; }
    public string? senha { get; set; }
    public string? nome_completo { get; set; }
    public string? status_usuario { get; set; }
    public int? fk_perfil { get; set; }
    

 //   public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
}
