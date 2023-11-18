// import React, { useState } from "react";

export default function About(props) {
  // const [btnState, setBtnState] = useState("Enable Dark Mode");

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "rgb(29 22 52)" : "white",
  };

  return (
    <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <h1 className="my-3 mx-5">About Us</h1>
      <div className="accordion mx-4" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis fugiat dolores aliquam natus aspernatur magni esse
              dolore ullam iste, cum quos recusandae soluta, ducimus,
              repellendus ipsam dolor enim maxime quibusdam in. Repellendus
              dolor excepturi tempora autem, quas voluptas vitae quos eius quam,
              totam mollitia, quaerat non deleniti maxime explicabo? Earum
              soluta minima delectus eos odio distinctio magni totam quae
              voluptates sequi alias adipisci, id nisi laboriosam amet nam cum
              accusamus corrupti! Consequuntur fuga veniam eveniet dolorem,
              laudantium eligendi magni sequi maxime iure labore, dolore culpa
              omnis fugiat laboriosam voluptates eaque eos suscipit molestias
              nulla. Blanditiis eos dolore et exercitationem adipisci nihil
              molestiae possimus repellendus ducimus maiores accusamus repellat,
              voluptas sunt praesentium unde corrupti voluptates, rerum,
              excepturi odit! Quisquam temporibus cum eaque minus laboriosam et
              reiciendis possimus ipsam id, accusantium corrupti aut quaerat
              consectetur magnam culpa fuga eum repellat quod corporis cumque
              quis facere vero incidunt! Recusandae modi error veniam,
              consequatur doloribus ratione id alias maiores atque magnam natus
              nam eius suscipit iusto odio neque est consequuntur, hic iure
              voluptatem quibusdam ab molestiae veritatis? Totam, repellat fuga
              ipsam illo corrupti adipisci perspiciatis sapiente velit. Dolor
              cum porro eum accusamus, facilis autem, eaque velit ipsam
              accusantium, repellat quisquam ab pariatur minus iusto!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis fugiat dolores aliquam natus aspernatur magni esse
              dolore ullam iste, cum quos recusandae soluta, ducimus,
              repellendus ipsam dolor enim maxime quibusdam in. Repellendus
              dolor excepturi tempora autem, quas voluptas vitae quos eius quam,
              totam mollitia, quaerat non deleniti maxime explicabo? Earum
              soluta minima delectus eos odio distinctio magni totam quae
              voluptates sequi alias adipisci, id nisi laboriosam amet nam cum
              accusamus corrupti! Consequuntur fuga veniam eveniet dolorem,
              laudantium eligendi magni sequi maxime iure labore, dolore culpa
              omnis fugiat laboriosam voluptates eaque eos suscipit molestias
              nulla. Blanditiis eos dolore et exercitationem adipisci nihil
              molestiae possimus repellendus ducimus maiores accusamus repellat,
              voluptas sunt praesentium unde corrupti voluptates, rerum,
              excepturi odit! Quisquam temporibus cum eaque minus laboriosam et
              reiciendis possimus ipsam id, accusantium corrupti aut quaerat
              consectetur magnam culpa fuga eum repellat quod corporis cumque
              quis facere vero incidunt! Recusandae modi error veniam,
              consequatur doloribus ratione id alias maiores atque magnam natus
              nam eius suscipit iusto odio neque est consequuntur, hic iure
              voluptatem quibusdam ab molestiae veritatis? Totam, repellat fuga
              ipsam illo corrupti adipisci perspiciatis sapiente velit. Dolor
              cum porro eum accusamus, facilis autem, eaque velit ipsam
              accusantium, repellat quisquam ab pariatur minus iusto!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Capabilities</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis fugiat dolores aliquam natus aspernatur magni esse
              dolore ullam iste, cum quos recusandae soluta, ducimus,
              repellendus ipsam dolor enim maxime quibusdam in. Repellendus
              dolor excepturi tempora autem, quas voluptas vitae quos eius quam,
              totam mollitia, quaerat non deleniti maxime explicabo? Earum
              soluta minima delectus eos odio distinctio magni totam quae
              voluptates sequi alias adipisci, id nisi laboriosam amet nam cum
              accusamus corrupti! Consequuntur fuga veniam eveniet dolorem,
              laudantium eligendi magni sequi maxime iure labore, dolore culpa
              omnis fugiat laboriosam voluptates eaque eos suscipit molestias
              nulla. Blanditiis eos dolore et exercitationem adipisci nihil
              molestiae possimus repellendus ducimus maiores accusamus repellat,
              voluptas sunt praesentium unde corrupti voluptates, rerum,
              excepturi odit! Quisquam temporibus cum eaque minus laboriosam et
              reiciendis possimus ipsam id, accusantium corrupti aut quaerat
              consectetur magnam culpa fuga eum repellat quod corporis cumque
              quis facere vero incidunt! Recusandae modi error veniam,
              consequatur doloribus ratione id alias maiores atque magnam natus
              nam eius suscipit iusto odio neque est consequuntur, hic iure
              voluptatem quibusdam ab molestiae veritatis? Totam, repellat fuga
              ipsam illo corrupti adipisci perspiciatis sapiente velit. Dolor
              cum porro eum accusamus, facilis autem, eaque velit ipsam
              accusantium, repellat quisquam ab pariatur minus iusto!
            </div>
          </div>
        </div>
      </div>
      {/* <div className="form-check form-switch">
        <input
          className="form-check-input mx-2 my-2"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          onClick={toggleStyle}
          // onClick={props.toggleMode}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {btnState}
        </label>
      </div> */}
    </div>
  );
}
