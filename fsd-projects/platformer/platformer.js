$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
      //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(1100, 300, 53, 290);
    createPlatform(150, 650, 60, 5, "red");
    createPlatform(400, 580, 60, 5, "lime");
    createPlatform(600, 650, 60, 5, "red");
    createPlatform(850, 550, 60, 5, "lime");
    createPlatform(620, 480, 60, 5, "red");
    createPlatform(400, 380, 60, 5, "lime");
    createPlatform(890, 370, 60, 5, "red");
    createPlatform(950, 170, 60, 5, "lime");
    createPlatform(200, 250, 60, 5, "red");
    createPlatform(760, 200, 40, 5, "lime");
    createPlatform(470, 140, 60, 5, "red");
    createPlatform(100, 100, 40, 5, "lime");

    // TODO 3 - Create Collectables
    createCollectable("diamond", 100, 50, 0.5, 0.7);
    createCollectable("steve", 1250, 400,);
    createCollectable("database", 855, 510,);


    
    // TODO 4 - Create Cannons
    createCannon("right", 130, 3000);
    createCannon("right", 600, 3000);
    createCannon("top", 490, 4000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
