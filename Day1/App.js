
        //    const heading= document.createElement("h1");
        //    heading.innerHTML="Namaste - Rishabh Jain";
        //    const root= document.getElementById("root");
        //    root.appendChild(heading);
        
        const heading = React.createElement("h1",{key:1},"Namaste Everybody");
        const heading1 = React.createElement("h2",{key:2},"RJ Here");
        console.log(heading);
        const root = ReactDOM.createRoot(document.getElementById("root"));
       // console.log(root);
        // const heading1 = React.createElement("h1",{},"Namaste Footer");
        // const root1 = ReactDOM.createRoot(document.getElementById("footer"));
        // root1.render(heading1);
        root.render([heading,heading1]);
        