export const RotateYellowCorners = () => (
    <>
        <div className="full">
            <hr/>
            <h3>Drehen der gelben Ecken</h3>
        </div>
        <div className="text-short">
            <p>
                Jetzt sind alle Ecken an der richtigen Stelle, sie müssen nur noch
                richtig gedreht werden. Drehe dafür den Würfel so, dass wieder die
                weiße Seite nach oben zeigt, und eine ungelöste Ecke nach unten
                rechts.
            </p>
        </div>
        <div className="image-2">
            <img
                src="images/white_on_top.jpg"
                className="solve-image"
            />
        </div>
        <div className="text-short">
            <p>
                Nun führst Du den gleichen Algorithmus wie am Anfang aus,
                <kbd>R U R' U'</kbd>, bis die gelbe Seite nach unten zeigt.
                Wichtig ist, dass hier <kbd>L' U' L U</kbd> nicht funktioniert.
                Wenn die gelbe Seite nach unten zeigt, drehst Du <b>nur</b>
                <kbd>D'</kbd>, nicht den ganzen Würfel, sodass wieder eine
                ungelöste Ecke unten rechts ist. Dies wiederholst du, bis der
                Würfel gelöst ist.
            </p>
        </div>
        <div className="image-2">
            <img
                src="images/solved_cube.jpg"
                className="solve-image"
            />
        </div>
    </>
);