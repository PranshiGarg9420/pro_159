AFRAME.registerComponent('info-banner',{
    schems:{
        itemId:{default:" ", type:"string"}
    },
    update:function(){
        this.createBanner();
    },
    createBanner:function(){
        postersInfo={
            frozen:{
                banner_url:'frozen_page.jpg' ,
                title:"Frozen",
                released_year:"2013",
                description:"When their kingdom becomes trapped in perpetual winter, fearless Anna (Kristen Bell) joins forces with mountaineer Kristoff (Jonathan Groff) and his reindeer sidekick to find Anna's sister, Snow Queen Elsa (Idina Menzel), and break her icy spell. Although their epic journey leads them to encounters with mystical trolls, a comedic snowman (Josh Gad), harsh conditions, and magic at every turn, Anna and Kristoff bravely push onward in a race to save their kingdom from winter's cold grip."
            },
            micky:{
                banner_url: 'micky_page.jpg',
                title:"Micky Mouse",
                released_year:"1928",
                description:"This special commemorative full-color edition collects the best of those irrepressible Mickey adventures, including Gottfredson's first--written by Walt Disney himself! Mickey's intrepid escapades include a frantic race against Pegleg Pete for a hidden gold mine, an epic struggle against the sinister Rhyming Man for control of an atomic disintegrator, the vexing hexing of Mickey's hometown by a horrible hypnotist..and that's only the beginning!"
            },
            princess:{
                banner_url: 'princess_page.jpg',
                title:"Princess Stories",
                released_year:"2016",
                description:"Get ready for adventure! Disney's beloved Princesses have returned in this hilarious collection of issues 1–4 of the Disney Princess comic series from Joe Books. Featuring laugh-out-loud stories from the worlds of Ariel, Belle, Cinderella, Tiana, Pocahontas, Rapunzel, and more, this charming collection will make all your dreams come true."
            },
            "toy-story":{
                banner_url: 'toy_story_page.jpg',
                title:"Toy Story",
                released_year:"1995",
                description:"Woody (Tom Hanks), a good-hearted cowboy doll who belongs to a young boy named Andy (John Morris), sees his position as Andy's favorite toy jeopardized when his parents buy him a Buzz Lightyear (Tim Allen) action figure. Even worse, the arrogant Buzz thinks he's a real spaceman on a mission to return to his home planet. When Andy's family moves to a new house, Woody and Buzz must escape the clutches of maladjusted neighbor Sid Phillips (Erik von Detten) and reunite with their boy."
            },
        };
        const {itemId}= this.data;

        const fadeBackgroundEl= document.querySelector('#fadeBackground');

        const entityEl= document.createElement('a-entity');
        entityEl.setAttribute('visible',true);
        entityEl.setAttribute('id',`${itemId}-banner`);
        entityEl.setAttribute('geometry',{
            primitive:'plane',
            width:0.9,
            height:1
        });
        entityEl.setAttribute('material',{color:'#000'});
        entityEl.setAttribute('position',{x: 0, y:0.1, z:-1});

        const item= postersInfo[itemId];
        const imageEl= this.createImageEl(item);
        const titleEl= this.createTitleEl(item);
        const descriptionEl= this.createDescriptionEl(item);

        entityEl.appendChild(imageEl);
        entityEl.appendChild(titleEl);
        entityEl.appendChild(descriptionEl);

        fadeBackgroundEl.appendChild(entityEl);
    },
    createImageEl: function(item){
        const entityEl= document.createElement('a-entity');
        entityEl.setAttribute('visible',true);
        entityEl.setAttribute('geometry',{
            primitive:'plane',
            width:0.85,
            height:0.4
        });
        entityEl.setAttribute('material',{src: item.banner_url});
        entityEl.setAttribute('position',{x:0, y:0.3, z:0.05});
        return entityEl;
    },
    createTitleEl: function(item){
        const entityEl= document.createElement('a-entity');
        entityEl.setAttribute('visible',true);
        entityEl.setAttribute('text',{
            shader: "msdf",
            anchor: "left",
            font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
            width: 1.2,
            height: 2,
            color: "#fff",
            value: `${item.title} (${item.released_year})`,
        })
        entityEl.setAttribute('position',{x:-0.4, y:0.02, z:0.05});
        return entityEl;
    },
    createDescriptionEl: function(item){
        const entityEl= document.createElement('a-entity');
        entityEl.setAttribute('visible',true);
        entityEl.setAttribute("text", {
            shader: "msdf",
            anchor: "left",
            font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
            width: 0.75,
            height: 2,
            color: "#fff",
            wrapCount: "40",
            value: item.description,
          });
          entityEl.setAttribute('position',{x:-0.4, y:-0.24, z:0.05});
        return entityEl;
    }
})


