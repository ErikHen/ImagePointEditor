using System;
using System.Text.RegularExpressions;
using System.Web.Mvc;


namespace AlloySample
{
    public class EPiServerApplication : EPiServer.Global
    {
        private static readonly Regex PathRegex = new Regex(@",,\d+", RegexOptions.Compiled);
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            //Tip: Want to call the EPiServer API on startup? Add an initialization module instead (Add -> New Item.. -> EPiServer -> Initialization Module)
        }
    }
}