namespace backend_dotnet8.Core.Entities
{
    public class Log:BaseEntity<long>
    {
        public string? USerName {  get; set; }
        public string? Description { get; set; }
    }
}
