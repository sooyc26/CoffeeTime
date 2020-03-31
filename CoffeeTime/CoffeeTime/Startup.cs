using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoffeeTime.Interfaces;
using CoffeeTime.Models;
using CoffeeTime.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace CoffeeTime
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
      //services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_3_0);
          services.AddDbContextPool<AppDbContext>(
            options => options.UseSqlServer(Configuration.GetSection("EntityConnection:AppDbContext").Value)
            );
      services.AddControllers();

      services.AddScoped<IDrinkRepository, DrinkOrderService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            // app.UseMvc();
            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
              endpoints.MapControllerRoute(
                  name: "default",
                  pattern: "{controller=DrinkOrder}/{action=DrinkOrders}/{id?}");
            });
    }
  }
}
