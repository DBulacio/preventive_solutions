<span id="contact"></span>
<section class="contact">
    <h4 class="contact-main-title" id="contact-main-title">Get in touch!</h4>
    <div class="ball"></div>
    <div class="row">
        <div class="col-md-4 contact-txt">
            <h4><i class="far fa-check-circle fa-lg"></i><span class="center-middle" id="contacttitle1"> Let us know what you need</span></h4>
            <p id="contactp1">Write a detailed explanation of the job, then fill your contact info.</p>
            <h4><i class="far fa-check-circle fa-lg"></i><span class="center-middle" id="contacttitle2"> Hire us for the job</span></h4>
            <p id="contactp2">We'll get in touch as soon as possible with a budget.</p>
        </div>
        <div class="col-md-8 contact-form">
            <form class="bg-secondary-color-dark rounded shadow-5-strong p-5" action="cwtgamsty-01/send.php" accept-charset="utf-8" method="POST">
                <!-- NOMBRE -->
                <div class="md-form">
                    <input type="text" id="name" name="name" maxlength="30" class="form-control" required>
                    <label class="text-white" for="name" id="contact_name">NAME</label>
                </div>
                <!-- EMAIL -->
                <div class="md-form">
                    <input type="email" id="email" name="email" maxlength="30" class="form-control" required>
                    <label class="text-white" for="email" id="contact_email">E-MAIL</label>
                </div>
                <!-- SERVICIO -->
                <div class="md-form">
                    <select class="browser-default custom-select" id="requested_service" name="requested_service" required>
                        <option value="0" id="cc0" disabled selected>I'M LOOKING FOR...</option>
                        <option value="1" id="cc1">Air Conditioner Repair</option>
                        <option value="2" id="cc2">Paint</option>
                        <option value="3" id="cc3">Electricity</option>
                        <option value="4" id="cc4">Lighting Fixtures</option>
                        <option value="5" id="cc5">Electrical Appliances for your Kitchen</option>
                        <option value="6" id="cc6">Electrical Appliances for your Home</option>
                        <option value="7" id="cc7">Plumbing</option>
                        <option value="8" id="cc8">Plumbing for your Kitchen and Laundry Room</option>
                        <option value="9" id="cc9">Plumbing for your bathroom</option>
                        <option value="10" id="cc10">Gas fitter for your home</option>
                        <option value="11" id="cc11">Gas fitter for your kitchen</option>
                        <option value="12" id="cc12">Floating floor and carpets</option>
                        <option value="13" id="cc13">Blacksmithing</option>
                        <option value="14" id="cc14">Furnishing</option>
                        <option value="15" id="cc15">Small jobs for your home</option>
                        <option value="16" id="cc16">Other (Especify)</option>
                    </select>
                </div>
                <br>
                <!-- IMAGEN 
                <div class="md-form">
                    <input type="file" accept="image/*,.pdf">
                </div>
                <br>-->
                <!-- COMENTARIO -->
                <div class="md-form">
                    <textarea class="form-control" name="message" id="message" rows="3"></textarea>
                    <label class="text-white" for="message" id="contact_msg">MESSAGE</label>
                </div>
                <br>
                <button type='submit' id='boton' class='btn btn-primary btn-block'>SEND</button>
            </form>
        </div>
    </div>
</section>