// Egy weboldal bizonyos részének manipulálása.

// DOM = Document Object Model

// A DOM az a teljes HTML dokumentum reprezentációját érti.
// Egyszerűbben: A DOM az a teljes HTML weboldal.
// A DOM-nka minden egyes részét lehetséges JS-el vezérelni.
// A DOM az objektum orientált.

// pl.:

/*
    <section> // A section is egy objektum, egy doboz. Ezen belül is lehetnek más dobozok, pl.: A <p> elem is egy doboz, és az abban lévő <a> elem is egy doboz.
        <p>Ez egy bekezdés elem. <a> Ez egy link </a> abcdefg </p>
        <p>Ez egy másik bekezdés.</p> 
    </section>

    <section>
        <img src="kep.png" alt="Ez egy kép" />
    </section>

*/ 

// A HTML dokumentum minden eleme egy objektum.
// Minden objektumnak vannak különböző tulajdonságai amik az adott objektumot leírják.
// pl.: Ha az embert egy objektumnak tekintjük akkor a szem szín is egy tulajdonság.

// A JS és a DOM két külön dolog.
// A JS-el lehet a DOM-ot kezelni.
// Vannak olyan JS metódusok amelyekkel az adott DOM elemet, annak tulajdonságát megtudjuk változtatni.
// Mivel metódusokról beszélünk ezért függvényeket fogunk használni
// Egy HTML alapú weboldal tartalma a DOM-ban tárolódik.