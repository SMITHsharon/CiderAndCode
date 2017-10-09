using System;

namespace CiderAndCode.Web.ViewModels
{
    public class CiderResult
    {
        public int Id { get; set; }
        public string TypeOfApple { get; set; }
        public int NumberOfGallons { get; set; }
        public string ContributingUser { get; set; }
        public DateTime DatePressed { get; set; }
        //public string TastingNotes { get; set; }
        //public bool Filtered { get; set; }
    }
}