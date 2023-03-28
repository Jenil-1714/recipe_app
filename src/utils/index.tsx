import {
  HeartIcon,
  LogoutIcon,
  MovieIcon,
  MyListIcon,
  PlayListIcon,
  SearchIcon,
  SettingsIcon,
  TvShowsIcon,
  WatchLaterIcon,
} from "../assets/icons";

export const recipiesData = {
  recipe: [
    {
      id: 1,
      name: "Spaghetti Bolognese",
      ingredients: [
        "1 pound spaghetti",
        "1 pound ground beef",
        "1 onion, chopped",
        "2 garlic cloves, minced",
        "1 can (28 ounces) crushed tomatoes",
        "2 tablespoons tomato paste",
        "1 teaspoon dried basil",
        "1 teaspoon dried oregano",
        "Salt and pepper",
        "Grated Parmesan cheese",
      ],
      instructions: [
        "Cook the spaghetti according to the package directions.",
        "Meanwhile, in a large skillet, cook the beef, onion, and garlic over medium heat until the beef is no longer pink; drain.",
        "Stir in the crushed tomatoes, tomato paste, basil, oregano, salt, and pepper.",
        "Bring to a boil; reduce heat and simmer, uncovered, for 20-25 minutes or until the sauce has thickened, stirring occasionally.",
        "Serve over the spaghetti; sprinkle with Parmesan cheese.",
      ],
      imgSrc:
        "https://cdn.pixabay.com/photo/2019/10/13/14/23/spaghetti-bolognese-4546233_960_720.jpg",
    },
    {
      id: 2,
      name: "Chicken Parmesan",
      ingredients: [
        "4 boneless, skinless chicken breasts",
        "1/2 cup all-purpose flour",
        "2 eggs, beaten",
        "1 cup seasoned bread crumbs",
        "1/2 cup grated Parmesan cheese",
        "1/2 cup shredded mozzarella cheese",
        "1 jar (24 ounces) spaghetti sauce",
      ],
      instructions: [
        "Preheat oven to 375°F.",
        "Place flour and beaten eggs in separate shallow dishes.",
        "In a third shallow dish, combine bread crumbs and Parmesan cheese.",
        "Dip chicken breasts in flour, shaking off excess, then dip in eggs, then coat with bread crumb mixture.",
        "Place chicken in a 9x13 inch baking dish and bake for 25-30 minutes, or until cooked through.",
        "Remove chicken from oven and spoon spaghetti sauce over the top.",
        "Sprinkle with mozzarella cheese and return to the oven for an additional 10 minutes, or until cheese is melted and bubbly.",
      ],
      imgSrc:
        "https://cdn.pixabay.com/photo/2020/02/03/19/07/salad-4816459_960_720.jpg",
    },
    {
      id: 3,
      name: "Chocolate Chip Cookies",
      ingredients: [
        "2 1/4 cups all-purpose flour",
        "1 teaspoon baking soda",
        "1 teaspoon salt",
        "1 cup unsalted butter, softened",
        "3/4 cup white sugar",
        "3/4 cup brown sugar",
        "2 eggs",
        "1 teaspoon vanilla extract",
        "2 cups semisweet chocolate chips",
        "1 cup chopped walnuts (optional)",
      ],
      instructions: [
        "Preheat oven to 375°F.",
        "In a medium bowl, combine flour, baking soda, and salt; set aside.",
        "In a large bowl, cream together butter, white sugar, and brown sugar until smooth.",
        "Beat in eggs and vanilla.",
        "Gradually stir in flour mixture.",
        "Fold in chocolate chips and walnuts, if using.",
        "Drop by rounded tablespoonfuls onto ungreased baking sheets.",
        "Bake for 8-10 minutes, or until golden brown.",
        "Cool on wire racks.",
      ],
      imgSrc:
        "https://cdn.pixabay.com/photo/2015/09/15/02/22/chocolate-chip-cookies-940428_960_720.jpg",
    },
    {
      id: 1989,
      name: "Classic Bubble Tea Recipe",
      ingredients: [
        "1 cup tapioca pearls (found in the dry goods section in Asian groceries)",
        "4 cups freshly brewed strong black tea",
        "1 tablespoon sugar",
        "Ice cubes, for shaking",
        "1/2 cup whole milk",
      ],
      instructions: [
        "While the tea is still hot or warm, add the sugar and stir to dissolve completely. Let cool and then refrigerate until completely chilled, about 2 hours, before serving.",
        "Place the tapioca pearls at the bottom of 2 cups. Use a cocktail shaker to shake together the ice, milk, and tea and strain into each cup and serve.",
      ],

      imgSrc:
        "https://cdn.pixabay.com/photo/2018/07/18/07/56/drink-3545791__340.jpg",
    },
    {
      id: 87,
      name: "Inihaw na Liempo (Grilled Pork Belly)",
      ingredients: [
        "1 cup (240 ml) soy sauce",
        "1 cup (240 ml) calamansi juice",
        "1 tablespoon minced garlic",
        "1 teaspoon freshly ground black pepper",
        "2 pounds (910 g) skinless pork belly, sliced lengthwise into 1-inch-thick (2.5 cm) strips",
        "Sawsawan or pinakurat, for serving",
      ],
      instructions: [
        "In a large nonreactive bowl, storage container, or ziplock bag, mix together the soy sauce, calamansi juice, garlic, and pepper.",
        "Add the pork belly slices, toss so they are well coated in the marinade, cover the bowl or container or seal the bag, and marinate in the refrigerator overnight.",
        "When you are ready to grill the pork, heat a gas or charcoal grill to medium or heat a grill pan or cast-iron skillet over medium-high heat.",
        "Discard the marinade and grill the pork slices, turning them once or twice, for 3 to 5 minutes, until they are cooked through and slightly charred around the edges. Transfer to a platter and serve with sawsawan or pinakurat.",
      ],

      imgSrc:
        "https://cdn.pixabay.com/photo/2015/01/08/01/50/barbecue-592234_1280.jpg",
    },
    {
      id: 11,
      name: "Huaraches de Nopal",
      ingredients: [
        "8 medium nopal paddles, cleaned and spines removed",
        "1 tbsp extra virgin coconut oil",
        "4 cups (1 L) cooked Black Velvet Beans",
        "4 cups (1 L) Red Cabbage Slaw or shredded lettuce",
        "Homemade or store-bought chipotle salsa, to taste",
        "6 oz (175 g) crumbled queso fresco",
      ],
      instructions: [
        "Bring a large pot of water to a boil on high heat and add nopales. Cook for about 5 minutes. Remove and rinse under cool water. Pat dry. Lightly score and smear coconut oil on each side of nopal. On a dry griddle on high heat, cook nopales in batches (don’t overcrowd in pan). Cook each side for about 3–5 minutes or until nopales begin to blister slightly. Set aside.",
        "In a frying pan on medium heat, mash beans and cook until consistency of a loose paste, about 5 minutes.",
        "Place nopales on a serving platter. Spread a layer of beans on each and serve topped with slaw or lettuce, salsa, and cheese.",
        "Use a gas grill or outdoor barbecue to cook whole raw nopal paddles: Rub paddles with oil to prevent sticking; scoring is not necessary. Grill nopal paddles about 7 minutes per side on medium high heat.",
      ],

      imgSrc:
        "https://p0.pxfuel.com/preview/341/392/39/menu-notebook-background-spices.jpg",
    },
    {
      id: 2061,
      name: "Waffled Ham and Cheese Melt with Maple Butter",
      ingredients: [
        "1 tablespoon unsalted butter, at room temperature",
        "2 slices sandwich bread",
        "2 ounces Gruyère cheese, sliced",
        "3 ounces Black Forest ham, sliced",
        "1 tablespoon Maple Butter",
        "Belgian or standard waffle maker",
      ],
      instructions: [
        "Preheat the waffle iron on low.",
        "Spread a thin, even layer of butter on one side of each piece of bread.",
        "Pile the cheese and ham on the unbuttered side of one slice of bread, and put the open-face sandwich in the waffle iron as far away from the hinge as possible. (This allows the lid to press down on the sandwich more evenly.) Place the second slice of bread on top, with the buttered side up, and close the waffle iron.",
        "Check the sandwich after 3 minutes. About halfway through, you may need to rotate the sandwich 180 degrees to ensure even pressure and cooking. If you’d like, you can press down on the lid of the waffle iron a bit to compact the sandwich, but do so carefully—the lid could be very hot. Remove the sandwich from the waffle iron when the bread is golden brown and the cheese is melted.",
        "Spread the Maple Butter on the outside of the sandwich. Slice in half diagonally and serve.",
      ],
      imgSrc:
        "https://cdn.pixabay.com/photo/2016/04/30/16/32/toast-1363232__480.jpg",
    },
    {
      id: 834,
      name: "Crawfish Salad",
      ingredients: [
        "1/2 cup crab claw meat, bits removed",
        "2 cups boiled crawfish tails",
        "1/2  pound boiled, peeled shrimp",
        "2 large celery stalks, sliced (about 1 cup)",
        "1/4 cup green bell pepper",
        "3/4 teaspoon salt",
        "1/8 teaspoon ground black pepper",
        "1/2 cup mayonnaise",
        "3 tablespoons lemon juice",
        "Pinch of cayenne pepper",
      ],
      instructions: [
        "Mix everything together in a bowl and then refrigerate until you are ready to serve. It’s really that easy. (I like to mix the mayo and lemon juice together before stirring it into the rest of the ingredients.)",
        "Do Ahead: Will keep in an airtight container for up to three days before getting funky.",
      ],

      imgSrc:
        "https://cdn.pixabay.com/photo/2021/06/27/10/58/ma-la-crawfish-6368458__340.jpg",
    },
    {
      id: 267,
      name: "Iced Café de Olla",
      ingredients: [
        "¾ cup grated piloncillo or (packed) dark brown sugar",
        '1 (3") canela or cinnamon stick',
        "5 cardamom pods, cracked",
        "5 allspice berries",
        "1 tsp. black peppercorns",
        "Pinch of kosher salt",
        "3 wide strips orange zest",
        "5–8 cups cold-brew coffee",
        "Unsweetened coconut milk or half-and-half (for serving)",
      ],
      instructions: [
        "Bring piloncillo, canela, cardamom, allspice, peppercorns, salt, and 1 cup water to a boil in a small saucepan. Reduce heat, cover, and simmer 15 minutes. Add orange zest; let cool.",
        "Strain spiced syrup through a fine-mesh sieve into a measuring glass; discard spices. (You should have about 1 cup.)",
        "To make 1 drink, pour 1 cup cold-brew coffee into an ice-filled glass. Stir in 2–3 Tbsp. spiced syrup; top with 2–3 Tbsp. coconut milk.",
        "Do Ahead: Syrup can be made 1 week ahead. Cover and chill.",
      ],

      imgSrc:
        "https://cdn.pixabay.com/photo/2018/10/11/15/24/coffee-3740012_1280.jpg",
    },
    {
      id: 1743,
      name: "If It Ain't Broke, Don't Fix It Stuffing",
      ingredients: [
        "1 cup (2 sticks) unsalted butter, plus more",
        '1 1/2 pound loaf sourdough bread, sliced 1" thick, torn into 1/2"–3/4" pieces',
        "1 tablespoon extra-virgin olive oil",
        "1 pound breakfast sausage, casings removed if needed",
        "1 large onion, finely chopped",
        "1 fennel bulb, finely chopped",
        "4 celery stalks, finely chopped",
        "2 teaspoon Diamond Crystal or 1 1/4 tsp. Morton kosher salt, plus more",
        "1 tsp. freshly ground black pepper, plus more",
        "1/2 cup dry white wine",
        "1/4 cup finely chopped parsley",
        "1 tablespoon finely chopped sage",
        "1 tablespoon finely chopped thyme",
        "3 large eggs",
        "4 cups Thanksgiving Stock or low-sodium chicken broth, divided",
      ],
      instructions: [
        "Place racks in middle and top of oven; preheat to 300°F. Butter a 3-qt. baking dish. Divide bread between 2 rimmed baking sheets and bake on middle rack, tossing occasionally, until dried out (do not let brown more than just a bit around the edges), 25–35 minutes. Let cool.",
        "Meanwhile, heat oil in a large skillet over medium-high. Arrange sausage in a single layer and cook, undisturbed, until browned underneath, about 3 minutes. Break up into bite-size pieces with 2 spatulas or spoons and continue to cook, tossing occasionally, until cooked through, about 5 minutes longer. Transfer sausage to a plate.",
        "Reduce heat to medium and melt 1 cup butter in same skillet. Add onion, fennel, and celery; season lightly with salt and pepper. Cook, stirring occasionally, until vegetables are very tender but not browned, 12–15 minutes. Add wine and scrape bottom of skillet to release any browned bits. Bring to a boil and cook until wine is evaporated, about 3 minutes. Toss in parsley, sage, and thyme and let mixture cool in skillet.",
        "Increase oven temperature to 350°F. Whisk eggs and 2 cups stock in a very large bowl. Add bread, sausage, and onion mixture and toss well to combine. Add 2 tsp. or 1 1/4 tsp. salt and 1 tsp. pepper. Drizzle remaining 2 cups stock over and toss again to combine. Let sit, tossing occasionally, until bread absorbs all of the liquid, about 10 minutes.",
        "Transfer stuffing to prepared dish; butter a sheet of foil and cover dish, butter side down. Bake on middle rack until very hot throughout (it should feel too hot to comfortably touch in the center; an instant-read thermometer inserted into the center should register 160°F), 35–40 minutes.",
        "Increase oven temperature to 425°F. Remove foil and transfer baking dish to top rack. Continue to bake stuffing until golden brown, 25–30 minutes longer.",
        "Stuffing can be assembled 1 day ahead. Cover and chill.",
      ],
      imgSrc:
        "https://cdn.pixabay.com/photo/2017/09/06/20/07/thanksgiving-2722816__340.jpg",
    },
    {
      id: 1554,
      name: "Instant Pot Shrimp Scampi",
      ingredients: [
        "1 1/2 lb. jumbo shrimp, peeled, deveined",
        "1/4 cup dry white wine",
        "4 garlic cloves, finely chopped",
        "2 tsp. kosher salt",
        "1/4 tsp. freshly ground black pepper",
        "6 Tbsp. unsalted butter",
        "1/4 cup finely chopped parsley",
        "2 tsp. fresh lemon juice",
        "An Instant Pot",
      ],
      instructions: [
        "Toss shrimp, wine, and garlic in cooker insert; season with salt and pepper. Lock on lid, making sure steam-release valve is in the proper sealed position. Select “Manual” and program for 1 minute at high pressure.",
        "As soon as the time has elapsed, turn off cooker, “Quick Release” the steam, and unlock lid. The shrimp should be opaque all the way through. Using a slotted spoon, transfer shrimp to a medium bowl, leaving juices behind.",
        "Select “Sauté” and simmer liquid until reduced by half, about 6 minutes. Add butter and stir until melted and incorporated and sauce is thick. Return shrimp to pot, add parsley and lemon juice, and toss to combine. Transfer to a platter to serve.",
      ],
      imgSrc:
        "https://cdn.pixabay.com/photo/2014/01/06/18/46/spaghetti-239563__340.jpg",
    },
    {
      id: 1214,
      name: "Steamed Clams with Almond and Parsley Butter and No Linguine",
      ingredients: [
        "1/4 cup almonds, toasted",
        "3 tablespoons unsalted butter, softened",
        "1/2 cup loosely packed parsley leaves, finely chopped",
        "2 tablespoons cooking oil, olive or vegetable",
        "2 garlic cloves",
        "Crushed red pepper flakes",
        "3 pounds small clams, such as Manilas or Littlenecks, well washed in cold water",
        "1/4 cup dry white wine",
        "A great loaf of rustic bread",
      ],
      instructions: [
        "Finely chop the almonds either by crushing with a rolling pin and chopping with a knife, or in a food processor. In a medium bowl, stir the almonds, butter, and parsley together until smooth. Don’t add salt—the clams will do that. Set aside while you cook the clams.",
        "Heat a large skillet to medium and add the oil, then the garlic and crushed red pepper flakes. Swirl the pan and, before the garlic browns at all, add the clams and wine. Cover the skillet and cook, stirring occasionally, until all the clams have opened. If a few won’t open, that’s okay; let them keep their deep secrets. Add the almond and parsley butter and stir so that it melts and mixes with the clam broth. Serve hot with spoons, bread, and napkins.",
        "Do it the way I originally planned and pluck some, or all, of the cooked clams from their shells, return to the skillet, and toss with hot boiled linguine.",
      ],
      imgSrc:
        "https://cdn.pixabay.com/photo/2021/12/14/15/31/clams-6870723__340.jpg",
    },
    {
      id: 1291,
      name: "Sweet-and-Spicy Slaw",
      ingredients: [
        "½ cup apple cider vinegar",
        "6 Tbsp. peach nectar or juice",
        "¼ cup extra-virgin olive oil",
        "2 Tbsp. vinegar-based hot sauce",
        "½ tsp. crushed red pepper flakes",
        "½ tsp. garlic powder",
        "½ tsp. kosher salt",
        "¼ tsp. cayenne pepper",
        "⅛ tsp. freshly ground black pepper",
        "1 large head of cabbage, thinly sliced",
      ],
      instructions: [
        "Whisk vinegar, peach nectar, oil, hot sauce, red pepper flakes, garlic powder, salt, cayenne, and black pepper in a large bowl to combine. Add cabbage and toss until completely coated in dressing. Cover and chill 30 minutes to allow cabbage to soften and flavors to meld together.",
        "Dressing can be made 1 day ahead. Cover and chill.",
      ],
      imgSrc:
        "https://cdn.pixabay.com/photo/2016/02/26/11/07/appetizer-1223859__480.jpg",
    },
    {
      id: 762,
      name: "Chipotle-Grilled Pork Steaks with Corn Salsa",
      ingredients: [
        "2 tsp. chipotle chile powder",
        "2 tsp. dried oregano",
        "1 1/2 tsp. garlic powder",
        "1 tsp. ground allspice",
        "2 3/4 tsp. (or more) kosher salt, divided",
        "4 (3/4\"-thick) boneless pork shoulder (Boston butt) steaks (about 2 lb.) or pork blade chops",
        "Vegetable oil (for grill)",
        "4 ears of corn, husked",
        "1/2 small white onion, finely chopped",
        "1 cup cilantro, finely chopped",
        "1 cup crumbled Cotija or feta (about 5 oz.)",
        "1/2 cup toasted pumpkin seeds (pepitas)",
        "3 Tbsp. fresh lime juice",
        "Flaky sea salt",
        "Lime wedges (for serving)"
      ],
      instructions: [
        "Mix chile powder, oregano, garlic powder, allspice, and 2 tsp. kosher salt in a small bowl. Rub spice mixture all over pork steaks. Let sit at room temperature at least 15 minutes.",
        "Prepare a grill for medium heat; oil grate. Grill pork and corn, turning occasionally, until pork is deeply charred and an instant-read thermometer inserted into the thickest part registers 145°F for medium, and the corn is lightly charred all over, 7–9 minutes. Transfer pork to a cutting board and let rest 10 minutes."
        ,
        "Let corn cool slightly. Slice kernels off cobs into a large bowl. Add onion, season with 3/4 tsp. kosher salt, and stir to combine. Stir in cilantro, cheese, pumpkin seeds, and lime juice; taste salsa and season with more kosher salt if needed."
        ,
        "Transfer pork to a platter. Drizzle any accumulated juices left on cutting board over; sprinkle with sea salt. Top with corn salsa and serve with lime wedges alongside."
        ,
        "Do Ahead: Pork can be seasoned 1 day ahead. Cover and chill. Let sit at room temperature 15 minutes before grilling."

      ],
      imgSrc: "https://cdn.pixabay.com/photo/2019/05/26/20/08/meat-4231134__480.jpg"
    },
    {
      id: 941,
      name: "Arctic Char Tostadas",
      ingredients: [
        "3 Tbsp. fish sauce",
        "1 cup unseasoned rice vinegar",
        "1/4 cup sliced scallions",
        "1 1/2\" piece ginger, peeled, finely grated",
        "Kosher salt",
        "1/4 tsp. finely grated lemon zest",
        "1/2 cup farmer’s cheese or whole-milk ricotta",
        "Kosher salt",
        "1 (8-oz.) boneless arctic char or salmon fillet",
        "Extra-virgin olive oil (for drizzling)",
        "4 (4\"–6\") tostadas",
        "Cilantro leaves with tender stems, sliced serrano chiles, capers, and lime wedges (for serving)"
      ],
      instructions: [
        "Heat a small saucepan over medium. When hot, pour in 1 Tbsp. fish sauce. It should bubble up vigorously and then get thicker and slightly darker, about 30 seconds. Repeat with remaining fish sauce, incorporating 1 Tbsp. at a time. Carefully add vinegar (it may spatter), then transfer mixture to a small bowl; let cool. Stir in scallions and ginger. Taste and season with salt.",
        "Preheat oven to 300°F. Mix lemon zest into cheese in a small bowl; season with salt and set aside. Place fish on a rimmed baking sheet and drizzle very lightly with oil; season with salt. Bake until just opaque throughout, about 5 minutes for char and 8–10 minutes for salmon. Remove from oven and break apart into large flakes. Drizzle with vinaigrette."
        ,
        "Divide reserved cheese mixture among tostadas. Top with fish, then cilantro, chiles, and capers. Serve with lime wedges."
        ,
        "Vinaigrette can be made 1 week ahead. Cover and chill."

      ],

      imgSrc: "https://cdn.pixabay.com/photo/2020/05/05/21/48/maiz-5135234__340.jpg"
    },
    {
      id: 428,
      name: "White Russian",
      ingredients: [
        "1½ oz. vodka",
        "¾ oz. Kahlúa",
        "¾ oz. heavy cream"
      ],
      instructions: [
        "Combine all the ingredients in a cocktail shaker filled with ice and shake until chilled and well integrated, about 15 seconds. Strain into a chilled Old-Fashioned glass."

      ],

      imgSrc: "https://cdn.pixabay.com/photo/2018/10/11/15/24/coffee-3740012__340.jpg"
    },
    {
      id: 1645,
      name: "Cinnamon Toast Bites",
      ingredients: [
        "1 pound challah bread, cut into 1x1\" cubes",
        "1 cup (2 sticks) unsalted butter",
        "1 cup sugar",
        "1 tablespoon ground cinnamon",
        "1 teaspoon vanilla extract",
        "1/8 teaspoon kosher salt"
      ],
      instructions: [
        "Preheat oven to 375°F. Arrange bread in a single layer on a parchment-lined rimmed baking sheet. Bake, tossing halfway through, until completely dried out, 18–20 minutes."
        ,
        "Meanwhile, melt butter in a small saucepan over medium heat. Whisk in sugar and 1/2 cup water and cook until sugar is dissolved. Whisk in cinnamon, vanilla, and salt. Transfer syrup to a large bowl, add bread, and toss quickly until coated. Using a slotted spoon, return cubes to baking sheet; discard remaining syrup. Bake bread, tossing halfway through, until sugar is slightly caramelized, about 10 minutes more. Let cool slightly."
        ,
        "Bites can be made 1 day ahead. Store in an airtight container at room temperature."

      ],
      imgSrc: "https://cdn.pixabay.com/photo/2015/01/29/02/29/french-toast-615611__480.jpg"
    },
    {
      id: 744,
      name: "Black Apple Old-Fashioned",
      ingredients: [
        "1 ½ ounces Jägermeister",
        "1 ounce apple brandy",
        "2 dashes apple bitters",
        "Garnish orange twist"
      ],
      instructions: [
        "Combine the Jägermeister, brandy, and bitters in an ice-filled rocks glass and stir gently. Garnish with an orange twist."
      ],

      imgSrc: "https://cdn.pixabay.com/photo/2020/05/09/01/17/cocktail-5147805__340.jpg"
    },
    {
      id: 1227,
      name: "Grilled Chicken with Mustard Barbecue Sauce",
      ingredients: [
        "2 Tbsp. extra-virgin olive oil, plus more for grill",
        "¼ cup apple cider vinegar",
        "¼ cup (packed) light brown sugar",
        "2 Tbsp. honey",
        "2 tsp. Worcestershire sauce",
        "1 tsp. garlic powder",
        "1 tsp. paprika",
        "¼ tsp. cayenne pepper",
        "½ cup plus 2 Tbsp. country-style mustard",
        "5–6 lb. skin-on, bone-in chicken breasts and/or whole legs",
        "2 Tbsp. plus 3 tsp. kosher salt, divided, plus more",
        "2 large sweet onions, sliced into ½\"-thick rounds",
        "1 (15-oz.) jar pickled green beans",
        "2 lb. tomatoes, halved if large, sliced into ½\"-thick rounds"
      ],
      instructions: [
        "Prepare a grill for 2-zone heat (for a charcoal grill, bank two-thirds of coals over one side of grill and scatter remaining coals over the other side; for a gas grill, set one burner to medium-high heat and the remaining burners to medium-low heat). Clean and lightly oil grate."
        ,
        "Mix vinegar, brown sugar, honey, Worcestershire, garlic powder, paprika, cayenne, and 1/2 cup mustard in a medium bowl; set aside."
        ,
        "Season chicken on all sides with 2 Tbsp. plus 2 tsp. salt. Grill chicken skin side down over direct heat, turning halfway through or whenever there is a flare, until lightly charred, 5-8 minutes. Move chicken to cooler part of grill, cover with lid, and continue to grill, turning several times and keeping covered, until an instant-read thermometer inserted into the thickest part of the breast registers 140°F, 15–20 minutes. The smaller pieces will go more quickly ,and you can transfer them to a rimmed baking sheet until all pieces are ready."
        ,
        "Uncover grill and return any pieces from baking sheet back to grill. Using a brush, generously baste chicken with reserved sauce. Continue to grill, turning every 1–2 minutes and basting the other side, until the internal temperature of thickest part of breast registers 155°F and sauce is shiny and lacquered, about 6 minutes. Transfer chicken to a cutting board as pieces are done (again, the smaller pieces will go more quickly). Let rest 10 minutes before separating drumsticks from thighs and slicing chicken breast in half on a bias."
        ,
        "While chicken rests, gently toss onions, 2 Tbsp. oil, and 1 tsp. salt in a medium bowl, being careful not to break up onion rounds into rings. Grill over medium-low heat, turning once, until charred on both sides and tender, 10–15 minutes."
        ,
        "Whisk 2 Tbsp. bean pickling liquid and remaining 2 Tbsp. mustard in a large bowl. Drain beans and add to bowl. Add tomatoes and grilled onions. Toss to combine; season with salt."
        ,
        "Arrange chicken on a large platter and serve with salad alongside."
        ,
        "Do Ahead: Sauce can be made 3 days ahead. Cover and chill."

      ],
      imgSrc: "https://cdn.pixabay.com/photo/2017/10/06/16/33/bbq-2823726__340.jpg"
    },
    {
      id: 866,
      name: "Garlicky Panko Toasties",
      ingredients: [
        "4 Tbsp. unsalted butter",
        "4 garlic cloves, lightly smashed",
        "1 1/2 cups panko (Japanese breadcrumbs)",
        "Kosher salt"
      ],
      instructions: [
        "Cook butter and garlic in a medium skillet over medium-low heat, swirling pan often, until foaming subsides and garlic is fragrant, about 2 minutes. Add panko and stir to coat evenly. Cook, stirring often, until panko is golden brown, about 4 minutes; season with salt."
        ,
        "Transfer to a plate and let cool. Discard garlic."
        ,
        "Do Ahead: Panko can be made 5 days ahead. Store airtight at room temperature."

      ],

      imgSrc: "https://cdn.pixabay.com/photo/2020/04/27/06/08/king-prawns-5098286__340.jpg"
    },
    {
      id: 1403,
      name: "Pimm's Spritz",
      ingredients: [
        "2 oz. Pimm’s No. 1",
        "3 oz. Prosecco",
        "Splash of Dr. Brown's Cel-Ray soda",
        "1 sprig celery leaves"
      ],
      instructions: [
        "Pour Pimm's and Prosecco into a rocks glass filled with ice. Top off with soda, stir gently to combine, and garnish with celery leaves."
      ],

      imgSrc: "https://cdn.pixabay.com/photo/2019/09/15/08/08/drink-4477573__340.jpg"
    },
    {
      id: 2155,
      name: "Sautéed Collard Greens and Sweet Onion with Paprika",
      ingredients: [
        "1/4 cup olive oil",
        "1 medium sweet onion, such as Vidalia or Maui, thinly sliced",
        "1 teaspoon paprika",
        "Kosher salt",
        "12 cups thinly sliced collard green leaves (from about 3 small or 2 large bunches)",
        "3 tablespoons coconut vinegar"
      ],
      instructions: [
        "Heat oil in a large skillet over medium. Cook onion, stirring often, until translucent and starting to brown around the edges, 5–8 minutes. Stir in paprika; season with salt. Add collard greens a handful at a time, stirring to wilt after each addition before adding more; cook until all greens are wilted but still somewhat firm, about 4 minutes. Stir in vinegar. Taste and add more salt if needed."
      ],

      imgSrc: "https://cdn.pixabay.com/photo/2021/09/27/19/26/collards-greens-6662115__340.jpg"
    },
    {
      id: 257,
      name: "Crispy Chicken Over Turmeric-Lemon Cabbage and Peas",
      ingredients: [
        "1 tsp. cumin seeds, coarsely crushed",
        "1 tsp. garlic powder",
        "1 tsp. ground coriander",
        "½ tsp. ground turmeric",
        "2 tsp. kosher salt, divided, plus more",
        "2½ lb. skin-on, bone-in chicken thighs (5–6)",
        "2 tsp. extra-virgin olive oil (optional)",
        "1 onion, thinly sliced",
        "2 garlic cloves, thinly sliced",
        "1 small head or ½ large head green cabbage (about 1½ lb.), thinly sliced",
        "1 lemon, sliced, seeds removed",
        "⅓ cup fresh or frozen, thawed peas",
        "Cilantro leaves with tender stems (for serving)"
      ],
      instructions: [
        "Preheat oven to 350°F. Mix cumin seeds, garlic powder, coriander, turmeric, and 1 tsp. salt in a small bowl."
        ,
        "Arrange chicken thighs on a plate and pat dry with paper towels. Season generously with spice mixture on both sides. You won’t need all of it; set leftover spice mixture aside for adding to cabbage later."
        ,
        "Working in 2 batches if needed, arrange chicken thighs, skin side down, in a cold large cast-iron skillet and set over medium-low heat. Cook, undisturbed, until skin underneath is golden brown, about 10 minutes. Increase heat to medium and cook until skin is deep golden brown, about 2 minutes. Turn chicken over and cook 5 minutes. Transfer to a plate. Reduce heat to medium-low if cooking chicken in batches."
        ,
        "If skillet seems dry, add oil, then cook onion and garlic over medium heat, stirring occasionally, until onion is translucent, about 3 minutes. Stir in reserved spice mixture and cook, stirring often, until fragrant, about 2 minutes. Add half of cabbage and stir to combine. Let cook 1 minute to wilt slightly, then add remaining cabbage and 1 tsp. salt and stir again to combine. Taste and season with more salt if needed. Add ½ cup water and cover (a baking sheet works great if you don’t have a lid). Cook cabbage 10 minutes."
        ,
        "Arrange chicken, skin side up, on top of cabbage, then wedge lemon slices evenly between thighs. Transfer to oven and bake until cabbage is tender and chicken is cooked through (an instant-read thermometer inserted into the thickest part of a thigh should register 165°F), 22–25 minutes. Remove from oven."
        ,
        "Scatter peas over chicken. Return skillet to oven and bake 5 minutes. Remove from oven and scatter cilantro over to serve."

      ],
      imgSrc: "https://cdn.pixabay.com/photo/2019/09/11/18/48/chicken-4469577_1280.jpg"
    },
    {
      id: 1945,
      name: "No-Frills Shrimp Boil",
      ingredients: [
        "2 pounds small red-skinned potatoes",
        "1/4 cup Zatarain's Crawfish, Shrimp & Crab Boil or Old Bay Seasoning, plus more for serving",
        "Kosher salt",
        "2 lemons, divided",
        "4 ears of corn, husked, each ear cut crosswise into quarters",
        "2 pounds shell-on large shrimp, cut along back of shell, deveined",
        "Olive oil (for drizzling)"
      ],
      instructions: [
        "Combine potatoes, 1/4 cup Zatarain's, several large pinches of salt, and 5 quarts water in a large stockpot. Cut 1 lemon in half crosswise and squeeze juice into pot, then toss in halves. Bring to a boil, reduce heat, and simmer, uncovered, until potatoes are fork-tender, 20–25 minutes."
        ,
        "Add corn to pot; increase heat to high and bring liquid back to a boil. Add shrimp, cover pot, and turn off heat. Poach shrimp until just cooked through, about 2 minutes. Immediately pour entire contents of pot into a large colander to drain, then spread out corn, potatoes, and shrimp on a large rimmed baking sheet or sheets of newspaper; discard lemon halves. Sprinkle with more Zatarain's and drizzle with oil. Cut remaining lemon into wedges and serve alongside for squeezing over."

      ],

      imgSrc: "https://cdn.pixabay.com/photo/2021/01/16/13/17/sea-5922119__340.jpg"
    },
    {
      id: 514,
      name: "Goat Birria Tacos With Cucumber Pico de Gallo",
      ingredients: [
        "1 (7–10-lb.) bone-in leg of goat or lamb, untrimmed",
        "⅓ cup Diamond Crystal or 3 Tbsp. Morton kosher salt, plus more",
        "1 large white onion, chopped",
        "10 garlic cloves, peeled",
        "3 large guajillo chiles, seeds removed",
        "1 large ancho chile, seeds removed",
        "2 dried chiles de árbol",
        "1 (3\") piece ginger, peeled",
        "2 whole cloves",
        "1 (14.5-oz.) can diced fire-roasted tomatoes",
        "1 Tbsp. black peppercorns",
        "1 Tbsp. dried oregano, preferably Mexican",
        "1 tsp. ground cumin",
        "5 Persian cucumbers, cut into (¼\") pieces",
        "½ medium red onion, cut into (¼\") pieces",
        "⅓ cup fresh lime juice",
        "¼ cup chopped basil",
        "1 tsp. kosher salt",
        "1–4 habanero chiles, seeds removed, finely chopped",
        "24 (6\"-diameter) corn tortillas, warmed"
      ],
      instructions: [
        "Rub goat leg with ⅓ cup Diamond Crystal or 3 Tbsp. Morton kosher salt, working into flesh and fat. Wrap tightly in parchment or wax paper and chill at least 3 hours and up to 3 days."
        ,
        "Place a rack in lower third of oven; preheat to 350°F. Evenly scatter onion, garlic, guajillo chiles, ancho chile, chiles de árbol, ginger, cloves, tomatoes, peppercorns, oregano, and cumin across a large roasting pan and place a roasting rack on top. Unwrap goat leg and set on rack. Pour 4 cups water into pan and cover tightly with foil. Bake until meat is pulling away from the bone and shreds easily with a fork, 4½–5 hours."
        ,
        "Let leg sit (still covered) until cool enough to handle (about 1 hour). Shred meat into small pieces and place in a large bowl; discard bones. Remove ginger from pan; discard. Working in batches if needed, purée liquid and aromatics left in pan in a blender until smooth. Pour half of consomé over meat and mix to coat. Taste and season with more salt if needed. Cover and set aside. Pour remaining consomé into a medium bowl and set aside for serving."
        ,
        "Do Ahead: Meat can be prepared 3 days ahead. Chill meat and consomé."
        ,
        "Toss cucumbers, onion, lime juice, basil, and salt in a medium bowl. Add 1–4 chiles, depending on their heat and how spicy you like things, and let sit 10 minutes."
        ,
        "Top warm tortillas with meat, then salsa. Serve with consomé for dipping."

      ],

      imgSrc: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795__340.jpg"
    },
    {
      id: 2035,
      name: "Rosy Boa Cocktail",
      ingredients: [
        "1 tablespoon kosher salt",
        "2 teaspoons paprika",
        "1 teaspoon chipotle chile powder",
        "2 cups fresh grapefruit juice",
        "1 1/2 cups tequila",
        "1/2 cup pomegranate juice",
        "1/3 cup fresh lime juice",
        "1/4 teaspoon rose water",
        "1 1/2 cups (or more) ginger beer",
        "Grapefruit wedges (for serving)"
      ],
      instructions: [
        "Combine salt, paprika, and chile powder in a small bowl. Moisten half of each rim of 8 rocks glasses and dip into chile salt. Set glasses aside."
        ,
        "Combine grapefruit juice, tequila, pomegranate juice, lime juice, and rose water in a large pitcher or 8-cup measuring glass. Add 1 cup ice and stir until ice is melted and cocktail is very cold. Stir in ginger beer. Fill prepared glasses with ice and divide cocktail among glasses. Garnish with grapefruit wedges and top off with more ginger beer, if desired."
        ,
        "Grapefruit mixture can be made 8 hours ahead. Stir in ice, then cover and chill. Add ginger beer and prepare glasses just before serving."

      ],

      imgSrc: "https://cdn.pixabay.com/photo/2021/08/24/04/52/cocktails-6569488__340.jpg"
    },
    {
      id: 1140,
      name: "Costa Rican Breakfast Bowl",
      ingredients: [
        "1/2 yellow onion, cut into 1/4-inch dice (about 1 cup)",
        "1 medium red bell pepper, cored, seeded, and cut into 1/2-inch dice (about 1 cup)",
        "1 teaspoon ground cumin",
        "1 teaspoon garlic powder",
        "1/2 jalapeño pepper, seeded and minced (optional)",
        "1/2 bunch kale, stems removed and discarded, leaves shredded (about 2 cups)",
        "2 cups cooked short- or long-grain brown rice",
        "1 (15-ounce) can black beans, rinsed and drained (about 1 1/2 cups)",
        "3 tablespoons finely chopped fresh cilantro",
        "Sea salt",
        "1 avocado, cut into 1/2-inch dice",
        "1 lime, cut into wedges"
      ],
      instructions: [
        "Combine the onion, bell pepper, cumin, garlic powder, and jalapeño (if youre using it) in a large sauté pan. Add 1/2 cup water and sauté the vegetables over medium heat for about 10 minutes, until they are tender, stirring occasionally and adding 1 to 2 more tablespoons water as needed to prevent the vegetables from sticking to the pan. Add the kale, rice, beans, and 1 cup water and cook over medium heat for 3 to 5 minutes, folding the ingredients, until the kale has wilted and the liquid has been absorbed."
        ,
        "Add half of the cilantro and salt to taste and stir to combine. Garnish with the remaining cilantro and serve with diced avocado on top and a lime wedge."

      ],

      imgSrc: "https://cdn.pixabay.com/photo/2018/04/28/08/00/buckwheat-3356778__480.jpg"
    },
    {
      id: 1337,
      name: "Grilled Strip Steak with Blistered Tomatoes and Green Beans",
      ingredients: [
        "1 1/2 lb. runner beans, green beans, and/or haricots verts, trimmed",
        "9 Tbsp. extra-virgin olive oil, divided, plus more",
        "Kosher salt",
        "3 cups Sun Gold tomatoes, divided",
        "3 (1\"–1 1/2\"-thick) strip steaks (about 2 1/4 lb.), patted dry",
        "2 Tbsp. smoked paprika",
        "1 Fresno chile, very thinly sliced",
        "1 large shallot, thinly sliced into rounds, rinsed",
        "1 garlic clove, finely grated",
        "3 Tbsp. red wine vinegar",
        "1 1/2 cups coarsely torn basil"
      ],
      instructions: [
        "Prepare a grill for medium-high heat. Toss beans with 2 Tbsp. oil in a large bowl; season with salt. Place beans on grill and cook, turning occasionally, until tender and lightly charred, 6–8 minutes."
        ,
        "Meanwhile, place a small skillet on grill; pour in 2 Tbsp. oil. Cook half of tomatoes, shaking skillet occasionally, until beginning to burst, about 3 minutes."
        ,
        "Oil grate. Season steaks with salt and coat with paprika, packing on more if needed. Drizzle with 2 Tbsp. oil. Grill steaks until lightly charred and an instant-read thermometer inserted into the thickest part registers 120°F, about 4 minutes per side for medium-rare. Transfer to a cutting board and let rest 10 minutes before slicing against the grain."
        ,
        "Halve remaining tomatoes and toss with chile, shallot, garlic, vinegar, grilled tomatoes, grilled beans, and 3 Tbsp. oil in a large bowl. Add basil, season with salt, and toss again. Combine steak and tomato mixture on a platter; drizzle with oil."

      ],

      imgSrc: "https://cdn.pixabay.com/photo/2017/02/24/21/18/steak-2096401__340.jpg"
    },
    {
      id: 1898,
      name: "Spicy Peanut Sauce",
      ingredients: [
        "3 garlic cloves, minced",
        "1/4 teaspoon dried hot red pepper flakes, or to taste",
        "1 tablespoon vegetable oil",
        "1 tablespoon tomato paste",
        "3 tablespoons creamy peanut butter",
        "3 tablespoons hoisin sauce",
        "1/2 teaspoon sugar",
        "3/4 cup water"
      ],
      instructions: [
        "In a small saucepan cook garlic and red pepper flakes in oil over moderate heat, stirring, until garlic is golden. Whisk in remaining ingredients and bring to a boil, whisking. Simmer sauce, whisking, until thickened, about 1 minute. Sauce may be made 3 days ahead and chilled, covered."
        ,
        "Serve sauce warm or at room temperature."

      ],

      imgSrc: "https://cdn.pixabay.com/photo/2017/07/08/19/41/fried-chicken-2485420__340.jpg"
    },
    {
      id: 888,
      name: "Safoi’s Moroccan Chicken Tagine",
      ingredients: [
        "1/2 teaspoon saffron threads",
        "1 teaspoon ground ginger",
        "1 tablespoon coarse salt",
        "1 teaspoon freshly ground black pepper",
        "1/2 cup (120 ml) extra-virgin olive oil",
        "1/2 cup (120 ml) canola oil",
        "1 (3 1/2-pound/1.7 kg) whole chicken",
        "7 large carrots, peeled",
        "1 small yellow onion, minced",
        "1/2 cup (75 g) olives (Mediterranean or Kalamata)",
        "1/2 preserved lemon, sliced thin",
        "1 tablespoon parsley, chopped"
      ],
      instructions: [
        "Combine the saffron, ginger, salt, pepper, olive oil, and canola oil in a large bowl. Set aside."
        ,
        "Clean and thoroughly wash the chicken, then cut it into 8 pieces."
        ,
        "Add the chicken to the bowl with the marinade, massaging the marinade into the chicken."
        ,
        "Cut the carrots in half and remove their yellow cores."
        ,
        "Open the tagine and lay the onion on the bottom. Arrange the carrots over the onion."
        ,
        "Lay the chicken with all of the marinade over the vegetables. Add 1 cup (240 ml) water and cover."
        ,
        "Cook on very low heat for 1 hour. Check at the 30-minute mark to ensure the bottom is not dry. Add another 1/2 cup (120 ml) water if necessary."
        ,
        "In the last 5 minutes of cooking, add the olives and the preserved lemon."
        ,
        "Garnish with parsley to serve."

      ],
      imgSrc: "https://cdn.pixabay.com/photo/2017/07/04/19/53/tajine-2472361__340.jpg"
    },
    {
      id: 73,
      name: "Atole de Zarzamoras",
      ingredients: [
        "5 cups water",
        "3 ounces piloncillo, coarsely chopped, or ⅓ cup firmly packed dark brown sugar",
        "½ cup sugar",
        "1 cup fresh masa, or 1 cup masa harina mixed with ½ cup of hot water",
        "1½ cups fresh blackberries"
      ],
      instructions: [
        "In a saucepot over high heat, bring the water to a boil with the piloncillo and sugar until they are dissolved. Add the masa and whisk so it dissolves and doesn’t form any lumps. Let thicken."
        ,
        "Purée the blackberries in a food processor, add to the mixture, and cook for a couple of minutes; do not boil too long or the drink will lose color and that fresh blackberry flavor. Enjoy it while it’s warm. If you have any left over it will thicken quite a bit; you can store it in the refrigerator and simply add a bit of water to the mixture when you reheat it."

      ],

      imgSrc: "https://cdn.pixabay.com/photo/2015/09/14/22/45/smoothie-940301_1280.jpg"
    },
    {
      id: 1429,
      name: "Slow-Roasted Salmon With Harissa",
      ingredients: [
        "⅓ cup extra-virgin olive oil",
        "¼ cup harissa paste (preferably New York Shuk)",
        "1 garlic clove, grated",
        "1 lemon, halved",
        "1 (2-lb.) skinless center-cut salmon fillet",
        "Kosher salt",
        "Mixed tender herbs (such as parsley, cilantro, dill, and/or chives; for serving)"
      ],
      instructions: [
        "Preheat oven to 275°F. Whisk oil, harissa, and garlic in a medium bowl. Pour half of harissa oil into a 2.5-qt. baking dish and swirl to coat. Thinly slice a lemon half and remove any seeds; scatter slices in dish."
        ,
        "Season salmon on all sides with salt and place in dish. Pour remaining harissa oil over salmon, spreading evenly over flesh with a pastry brush or spoon. Roast 15 minutes. Remove from oven and baste fish with harissa oil pooled in dish. Return to oven and continue to roast until flesh flakes apart easily with a spoon but is not quite cooked through, 10–20 minutes longer."
        ,
        "Use spoon to break up salmon into irregular pieces. Arrange salmon and lemon slices on a platter. Drizzle with any harissa oil left in dish, squeeze remaining lemon half over, and scatter some herbs around."

      ],

      imgSrc: "https://cdn.pixabay.com/photo/2016/04/06/17/45/salmon-1312372__480.jpg"
    },
    {
      id: 1540,
      name: "Slow Cooker Ricotta-Spinach Polenta with Tomato Salad",
      ingredients: [
        "1 1/2 cups polenta (not instant or quick-cooking)",
        "2 tablespoons unsalted butter, cut into bits",
        "Kosher salt",
        "5 ounces baby spinach (about 5 loosely packed cups)",
        "1 pint cherry tomatoes, halved",
        "2 teaspoons extra-virgin olive oil, plus more for the eggs",
        "2 teaspoons balsamic vinegar",
        "Freshly ground black pepper",
        "4 large eggs (optional)",
        "1 cup grated Parmesan",
        "1 cup whole or part-skim milk ricotta",
        "5- to 7-quart slow cooker"
      ],
      instructions: [
        "Combine the polenta with 6 1/2 cups water in a 5- to 7-quart slow cooker. Add the butter and 2 teaspoons salt. Cover and cook on LOW until the polenta is thick and tender, about 6 hours."
        ,
        "With the slow cooker on LOW, stir the polenta well and then stir the spinach into the polenta in 2 batches, covering the cooker and letting the first batch wilt before adding the second, about 5 minutes per batch."
        ,
        "Meanwhile, in a medium bowl, toss together the tomatoes, oil, and vinegar. Season the tomato salad with salt and pepper."
        ,
        "Optional: Pour a thin layer of oil into a large skillet over medium-high heat and crack 4 eggs into the pan. Season the eggs with salt and pepper and cook until the whites are golden brown, lacy on the edges, and just set in the middle, and the yolks are still a little jiggly, about 3 minutes."
        ,
        "Fold the Parmesan and ricotta into the polenta. Taste and season the polenta with salt if necessary. Stir in warm water by the tablespoon if the polenta is looking too thick for your taste—keep in mind it will continue to thicken as it cools. Top bowls of the polenta with the tomato salad and, if you like, the fried eggs."

      ],
      imgSrc: "https://cdn.pixabay.com/photo/2016/06/01/22/01/oven-polenta-1429812__340.jpg"
    },
    {
      id: 1093,
      name: "Turkey for Two With Pan-Sauce Gravy",
      ingredients: [
        "1 split skin-on, bone-in turkey breast (about 2 lb.)",
        "2 tsp. kosher salt",
        "1 tsp. freshly ground black pepper",
        "1 Tbsp. vegetable oil",
        "2/3 cup dry white wine",
        "2 sprigs thyme",
        "1 sprig rosemary",
        "1 sprig sage",
        "2 garlic cloves, crushed",
        "1 tsp. cornstarch",
        "1 Tbsp. cold unsalted butter, cut into small pieces"
      ],
      instructions: [
        "Preheat oven to 350°F. Season turkey with salt and pepper. Let sit at room temperature at least 30 minutes or up to 1 hour, which will help the turkey cook more quickly and evenly."
        ,
        "Heat oil in a 10\" ovenproof skillet over high until just barely smoking. Sear turkey skin side down until deeply golden brown, about 5 minutes; transfer to a plate. Add wine to skillet, scraping up browned bits with a spatula, and cook until liquid is reduced by half, about 2 minutes. Remove from heat, add thyme, rosemary, sage, garlic, cornstarch, and 2/3 cup water, and whisk to combine."
        ,
        "Place breast skin side up in liquid in skillet and transfer skillet to oven. Roast, checking every 20 minutes or so and adding 1/4 cup more water if liquid under turkey is evaporating lower than 1\" in pan, until an instant-read thermometer inserted into the thickest part of breast without touching bone registers 150°F, about 50 minutes (temperature will continue to rise as turkey rests)."
        ,
        "Transfer turkey to a cutting board and let rest 10 minutes before slicing."
        ,
        "Meanwhile, remove herb sprigs from skillet and discard. Whisk liquid remaining in skillet until garlic mostly dissolves, adding a splash of water and heating over high if needed to loosen (gravy should be thick but easily pourable). Whisk butter into gravy until melted. Strain gravy through a fine-mesh sieve into a small pitcher or bowl."
        ,
        "Serve turkey with gravy alongside."

      ],
      imgSrc: "https://cdn.pixabay.com/photo/2017/02/16/17/25/food-2071924__480.jpg"
    },
    {
      id: 2154,
      name: "Spiced Salmon Kebabs",
      ingredients: [
        "2 tablespoons chopped fresh oregano",
        "2 teaspoons sesame seeds",
        "1 teaspoon ground cumin",
        "1 teaspoon kosher salt",
        "1/4 teaspoon crushed red pepper flakes",
        "1 1/2 pounds skinless salmon fillet (preferably wild), cut into 1\" pieces",
        "2 lemons, very thinly sliced into rounds",
        "2 tablespoons olive oil",
        "16 bamboo skewers soaked in water 1 hour"
      ],
      instructions: [
        "Prepare grill for medium heat. Mix oregano, sesame seeds, cumin, salt, and red pepper flakes in a small bowl to combine; set spice mixture aside."
        ,
        "Beginning and ending with salmon, thread salmon and folded lemon slices onto 8 pairs of parallel skewers to make 8 kebabs total. Brush with oil and season with reserved spice mixture."
        ,
        "Grill, turning occasionally, until fish is opaque throughout, 5-8 minutes."

      ],
      imgSrc: "https://cdn.pixabay.com/photo/2020/02/28/09/36/salmon-4886981__340.jpg"
    }

  ],
};

export const sidebarMenuList = [
  {
    name: "Discover",
    link: "/",
    icon: SearchIcon,
  },
  {
    name: "Playlist",
    link: "/playlist",
    icon: PlayListIcon,
  },
  {
    name: "Movie",
    link: "/movie",
    icon: MovieIcon,
  },
  {
    name: "TV Shows",
    link: "/tv-shows",
    icon: TvShowsIcon,
  },
  {
    name: "My List",
    link: "/my-list",
    icon: MyListIcon,
  },
  {
    name: "Watch Later",
    link: "/watch-later",
    icon: WatchLaterIcon,
  },
  {
    name: "Recommended",
    link: "/recommended",
    icon: HeartIcon,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: SettingsIcon,
  },
  {
    name: "Logout",
    link: "/logout",
    icon: LogoutIcon,
  },
];
