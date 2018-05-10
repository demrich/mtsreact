var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(
    [ 
      {  title: 'indoor',
         background: 'https://fakeimg.pl/1500x755/',
         featuredImage: '',
         float: 'left',
         content: 'Duis ullamco eiusmod veniam aliquip ea ipsum magna tempor qui Lorem sit. Id amet enim commodo eiusmod laborum reprehenderit. Elit fugiat velit elit veniam ea Lorem velit irure ea ipsum magna. Laborum excepteur sit aliqua veniam elit enim est eu non ex est. Dolor labore dolore eiusmod ad tempor.',
         products: 
           [ {
                 name: 'Example Product',
                 price: '49.99',
                 cartLink: "#",
                 imageURL: 'https://fakeimg.pl/150/'
     
             },
              {
                 name: 'Example Product',
                 price: '49.99',
                 cartLink: "#",
                 imageURL: 'https://fakeimg.pl/150/'
     
             },
             {
                 name: 'Example Product',
                 price: '49.99',
                 cartLink: "#",
                 imageURL: 'https://fakeimg.pl/150/'
     
             },
             {
                 name: 'Example Product',
                 price: '49.99',
                 cartLink: "#",
                 imageURL: 'https://fakeimg.pl/150/'
     
             }]
         
      },
      {  title: 'outdoor',
         background: 'https://fakeimg.pl/1500x755/',
         featuredImage: '',
         float: 'right',
         content: 'Duis ullamco eiusmod veniam aliquip ea ipsum magna tempor qui Lorem sit. Id amet enim commodo eiusmod laborum reprehenderit. Elit fugiat velit elit veniam ea Lorem velit irure ea ipsum magna. Laborum excepteur sit aliqua veniam elit enim est eu non ex est. Dolor labore dolore eiusmod ad tempor.',
         products: 
            [{
               name: 'Example Product',
               price: '49.99',
               cartLink: "#",
               imageURL: 'https://fakeimg.pl/150/'
     
           },
            {
               name: 'Example Product',
               price: '49.99',
               cartLink: "#",
               imageURL: 'https://fakeimg.pl/150/'
     
           },
           {
               name: 'Example Product',
               price: '49.99',
               cartLink: "#",
               imageURL: 'https://fakeimg.pl/150/'
     
           },
           {
               name: 'Example Product',
               price: '49.99',
               cartLink: "#",
               imageURL: 'https://fakeimg.pl/150/'
     
           }]
       
      },
      {  title: 'in-wall',
         background: 'https://fakeimg.pl/1500x755/',
         featuredImage: '',
         float: 'left',
         content: 'Duis ullamco eiusmod veniam aliquip ea ipsum magna tempor qui Lorem sit. Id amet enim commodo eiusmod laborum reprehenderit. Elit fugiat velit elit veniam ea Lorem velit irure ea ipsum magna. Laborum excepteur sit aliqua veniam elit enim est eu non ex est. Dolor labore dolore eiusmod ad tempor.',
         products: [
              {name: 'Example Product',
               price: '49.99',
               cartLink: "#",
               imageURL: 'https://fakeimg.pl/150/'
              },
              {name: 'Example Product',
              price: '49.99',
              cartLink: "#",
              imageURL: 'https://fakeimg.pl/150/'
     
             },
             {name: 'Example Product',
             price: '49.99',
             cartLink: "#",
             imageURL: 'https://fakeimg.pl/150/'
     
            },
       ]
           
       }
      
     ]

  );
});

module.exports = router;


