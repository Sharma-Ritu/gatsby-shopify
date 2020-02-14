import React, { useState }  from "react"
import axios from "axios";
import { Link } from "gatsby"
import Layout from "~/layouts"
const MyForm = () => {
    
    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });
    const handleServerResponse = (ok, msg, form) => {
      setServerState({
        submitting: false,
        status: { ok, msg }
      });
      if (ok) {
        form.reset();
      }
    };
    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "post",
        url: "https://getform.io/f/",
        data: new FormData(form)
      })
        .then(r => {
          handleServerResponse(true, <p> "Thanks for contacting us! We will be in touch with you shortly." </p>, form);
        })
        .catch(r => {
          handleServerResponse(false, r.response.data.error, form);
        });
    };
    return (
        <Layout>
            <form action="https://getform.io/f/" method="POST" onSubmit={handleOnSubmit}>
            <div className="form-group">
                <div className="row">
                    <div className="col-6">
                      <input type="text" name="name" className="form-control" id="exampleInputName" placeholder="Your Name" required="required" />
                    </div>
                    <div className="col-6">
                      <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your email"/>
                    </div>
              </div>
              <div className="row pt-3">
                <div className="col-12">
                  <input type="text" name="subject" className="form-control" id="exampleInputSubject" placeholder="Your Subject" required="required" />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-12">
                  <textarea name="message" className="form-control" rows="8" id="message" placeholder="Your Message" required="required"></textarea>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-12">
                   <button type="submit" className="btn btn-danger btn-block"  disabled={serverState.submitting}>SEND</button>
                </div>
              </div>
              </div>
                
            {serverState.status && (
                <p className={!serverState.status.ok ? "errorMsg" : ""}>
                {serverState.status.msg}
                </p>
            )}
            </form>
  </Layout>
     
    );
  };
  
  export default MyForm;