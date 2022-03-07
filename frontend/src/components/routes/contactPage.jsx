export const ContactPage = () => (
    <div className="full">
        <h2>Kontaktformular</h2>
        <form className="contactForm">
            <fieldset>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" name="Name" className="contactFormInput" required/>
            </fieldset>
            <fieldset>
                <label htmlFor="email">E-Mail:</label>
                <input id="email" type="email" name="E-Mail" className="contactFormInput" required/>
            </fieldset>
            <fieldset>
                <label htmlFor="nachricht">Nachricht:</label>
                <textarea id="nachricht" rows="5" name="Nachricht" className="contactFormInput" required></textarea>
            </fieldset>
            <input type="submit" value="Absenden"/>
        </form>
    </div>
);