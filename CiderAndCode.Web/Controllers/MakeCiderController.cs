using System;
using System.Collections.Generic;
using System.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CiderAndCode.Web.DataModels;
using CiderAndCode.Web.ViewModels;

namespace CiderAndCode.Web.Controllers
{
    [RoutePrefix("api/MakeCider")]
    public class MakeCiderController : ApiController
    {
        [Route("{id}"), HttpPost]
        public HttpResponseMessage MakeCider(int id)
        {
            var db = new AppDbContext();

            //db.Bushels.Remove(db.Bushels.Find(id));
            db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK);
        }

    }
}