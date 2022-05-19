<section class="contact">
    <div class="row">
        <div class="col-md-4 contact-txt">
            <h4><i class="far fa-check-circle fa-lg"></i><span class="center-middle"> Let us know what you need</span></h4>
            <p>Adjuntanos imágenes de referencia sobre dónde querés realizar el trabajo y completá tus datos de contacto.</p>
            <h4><i class="far fa-check-circle fa-lg"></i><span class="center-middle"> Hire us for the job</span></h4>
            <p>En 24hs el tecnico que selecciones se va a presentar en tu domicilio en el turno pactado</p>
        </div>
        <div class="col-md-8 contact-form">
            <form class="bg-secondary-color-dark rounded shadow-5-strong p-5" action="cwtgamsty-01/send.php" accept-charset="utf-8" method="POST">
                <!-- NOMBRE -->
                <div class="md-form">
                    <input type="text" id="nombre" name="nombre" maxlength="30" class="form-control" required>
                    <label class="text-white" for="nombre">NOMBRE</label>
                </div>
                <!-- EMAIL -->
                <div class="md-form">
                    <input type="email" id="email" name="email" maxlength="30" class="form-control" required>
                    <label class="text-white" for="email">E-MAIL</label>
                </div>
                <!-- SERVICIO -->
                <div class="md-form">
                    <select class="browser-default custom-select" id="servicio_que_me_interesa" name="servicio_que_me_interesa">
                        <option value="0" disabled selected>ESTOY BUSCANDO...</option>
                        <option value="1">Servicio 1</option>
                        <option value="1">Servicio 1</option>
                        <option value="1">Servicio 1</option>
                        <option value="1">Servicio 1</option>
                        <option value="1">Servicio 1</option>
                        <option value="1">Servicio 1</option>
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
                    <textarea class="form-control" name="comentario" id="comentario" rows="3"></textarea>
                    <label class="text-white" for="comentario">COMENTARIO</label>
                </div>
                <br>
                <button type='submit' id='boton' class='btn btn-primary btn-block'>ENVIAR</button>
            </form>
        </div>
    </div>
</section>