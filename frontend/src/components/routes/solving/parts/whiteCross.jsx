export const WhiteCross = () => (
    <>
        <div className="full">
            <h3>Weißes Kreuz</h3>
            <p>
                Da wir nun wissen, wie Algorithmen beschrieben werden, können wir
                mit dem Lösen anfangen. Für diesen Schritt brauchen wir allerdings
                noch keine Algorithmen, da wir das weiße Kreuz rein intuitiv bauen
                können. Probier es einfach mal aus!
            </p>
        </div>
        <div className="text-short">
            <p>
                Achte unbedingt darauf, dass die Kanten auch an der richtigen
                Seite sind.
            </p>
        </div>
        <div className="image-1">
            <img
                src="images/white_cross_incorrect.jpg"
                className="solve-image"
            />
            <span className="center-align">Falsch</span>
        </div>
        <div className="image-2">
            <img
                src="images/white_cross_correct.jpg"
                className="solve-image"
            />
            <br/>
            <span className="center-align">Richtig</span>
        </div>
    </>
);