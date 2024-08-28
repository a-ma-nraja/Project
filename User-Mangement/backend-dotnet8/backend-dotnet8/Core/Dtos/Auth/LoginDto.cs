using System.ComponentModel.DataAnnotations;

namespace backend_dotnet8.Core.Dtos.Auth
{
    public class LoginDto
    {
        [Required(ErrorMessage = "UserName is required")]
        public string UserName {get;set;}
        [Required(ErrorMessage = "UserName is required")]
        public string Password { get; set; }

    }
}
