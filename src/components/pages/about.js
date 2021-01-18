import React from "react";
import profilePicture from "../../../static/assets/images/bio/profile.png";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="right-column">
        Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in
        45 BC "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?" 1914 translation by H. Rackham "But I must
        explain to you how all this mistaken idea of denouncing pleasure and
        praising pain was born and I will give you a complete account of the
        system, and expound the actual teachings of the great explorer of the
        truth, the master-builder of human happiness. No one rejects, dislikes,
        or avoids pleasure itself, because it is pleasure, but because those who
        do not know how to pursue pleasure rationally encounter consequences
        that are extremely painful. Nor again is there anyone who loves or
        pursues or desires to obtain pain of itself, because it is pain, but
        because occasionally circumstances occur in which toil and pain can
        procure him some great pleasure. To take a trivial example, which of us
        ever undertakes laborious physical exercise, except to obtain some
        advantage from it? But who has any right to find fault with a man who
        chooses to enjoy a pleasure that has no annoying consequences, or one
        who avoids a pain that produces no resultant pleasure?"
      </div>
    </div>
  );
}
