using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EPiServer.Shell.Modules;
using Microsoft.Extensions.DependencyInjection;

namespace ImagePointEditor
{
    public static class ServiceExtension
    {
        public static void AddImagePointEditor(this IServiceCollection services)
        {
            services.Configure<ProtectedModuleOptions>(o => o.Items.Add(new ModuleDetails { Name = "ImagePointEditor" }));
        }
    }
}
