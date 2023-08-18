let courses = [ 
    { 
      id: 1, 
      title: "ReactJS Tutorial", 
      rating: 4.2, 
    }, 
    { 
      id: 2, 
      title: "Angular Tutorial", 
      rating: 2.5, 
    }, 
    { 
      id: 3, 
      title: "VueJS Tutorial", 
      rating: 3.8, 
    }, 
    { 
      id: 4, 
      title: "Java Tutorial", 
      rating: 4, 
    }, 
    { 
      id: 5, 
      title: "JavaScript Tutorial", 
      rating: 3.5, 
    }, 
  ];


  let addedCourses = [ 
    { 
      id: 6, 
      title: "PHP Tutorial", 
      rating: 3, 
    }, 
    { 
      id: 7, 
      title: "C# Tutorial", 
      rating: 2, 
    }, 
    { 
      id: 8, 
      title: "Docker Tutorial", 
      rating: 3.8, 
    } 
  ]; 



    // First Request
    let firstRequest = courses.filter(checkRate);
    function checkRate({rating}){
        return rating >=4;
    }
    console.log(firstRequest);



    // Second Request
    let secondRequest = courses.filter(({rating}) => rating <4).map((element) =>(element.id + " - " + element.title + " - " + element.rating));
    console.log(secondRequest);



    // Third Request

    let finalCourses = (courses,addedCourses) =>[...courses,...addedCourses];
    console.log(finalCourses(courses,addedCourses));



