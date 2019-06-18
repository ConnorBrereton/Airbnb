# Airbnb Replica

Run at the root of the folder
<pre><code>
>>> HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db HBNB_API_HOST=0.0.0.0 HBNB_API_PORT=5000 python3 -m api.v1.app
</code></pre>
Expected response:
<pre><code>
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
...
</code></pre>
A list of all the possible routes and their respective routes are available on Flasgger's application, <a href="http://0.0.0.0:5000/apidocs/">here</a>. 

Input route for specific api request and available route below.

http://0.0.0.0:5000/api/v1/{Route}

| Route                                    | Request            |
|------------------------------------------|--------------------|
| states                                   | [GET, POST]        |
| states/<state_id>                        | [GET, DELETE, PUT] |
| states/<state_id>/cities                 | [GET, POST]        |
| cities/<city_id>                         | [GET, DELETE. PUT] |
| amenities                                | [GET, POST]        |
| amenities/<amenity_ids>                  | [GET, DELETE, PUT] |
| users                                    | [GET, POST]        |
| users/<user_id>                          | [GET, DELETE, PUT  |
| cities/<city_id>/places                  | [GET, POST]        |
| places/<place_id>                        | [GET, DELETE, PUT] |
| places/<place_id>/amenities              | [GET, DELETE]      |
| places/<place_id>/amenities/<amenity_id> | [POST]             |
| places/<place_id>/reviews                | [GET, POST]        |
| reviews/<review_id>                      | [GET, DELETE, PUT] |
| places                                   | [POST]             |

In order to begin the console, you can run either 'python3 console.py' or './console.py' in the command line.

Classes that are currently supported include BaseModel, User, City, State, Amenity, Review, and Place.

The console currently supports the following commands:
- **create \<class name>**, which will create an object of the class declared by user;
- **show \<class name> \<id>**, which will display the object information if it exists;
- **destroy \<class name> \<id>**, which will delete the object if it exists;
- **all \<class name>**, where the class name input is optional and the console will display all instances, or all instances of a specified object;
- **update \<class name> \<id> \<attribute name> \<attribute value>**, whilch will update an instance attribute of a previously declared object.

Additionally, the console also supports the following command formats:
- **\<class name>.all()**, which will display all instances of the specified class;
- **\<class name>.count()**, whilch will display the number of instances of the specified class;
- **\<class name>.show(\<id>)**, whilch will display the instance with correct id and class;
- **\<class name>.destroy(\<id>)**, which will delete the instance with correct id and class;
- **\<class name>.update(\<id>, \<attribute name>, \<attribute value>)**, which will update an instance of the given class and id with the new attribute;
- **\<class name>.update(\<id>, \<dictionary representation>)**, which will update an instance of the given class and id with a dictionary of key value pairs that will be new attributes for the objects. 
- **\<class name>.create(<key>=<value>) create an instance of the class
