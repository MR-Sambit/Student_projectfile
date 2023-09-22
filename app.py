from bson import ObjectId
from flask import Flask, request, render_template
from flask_pymongo import PyMongo
from gridfs import GridFS
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/project_data"
db = PyMongo(app).db
fs=GridFS(db)

# Define a project schema (if needed)
# project_schema = ...

@app.route('/')
def index():
    # Specify the file ID (replace 'YOUR_FILE_ID' with the actual file ID)
    file_id = ObjectId('650be83c83fcf86d4a810294')

    # Retrieve the file from MongoDB using the file ID
    file = fs.get(file_id)

    # Specify the output zip file path
    output_zip_file_path = 'C:/Users/Sambi/OneDrive/Desktop/New folder/file.zip'

    # Save the file to the specified output zip file path
    with open(output_zip_file_path, 'wb') as output_file:
        output_file.write(file.read())

    print('Zip file retrieved and saved successfully.')

    return render_template("student_project.html")

# Endpoint to save project data
@app.route('/student_project', methods=['POST'])
def add_project():
    if request.method == 'POST':
        studentName=request.form.get('studentName')
        projectTitle=request.form.get('projectTitle')
        projectDescription=request.form.get('projectDescription')
        projectFile=request.files['projectFile']
        githubLink = request.form.get('githubLink')

        fileId = fs.put(projectFile)

        data={
        'studentName': studentName,
        'projectTitle': projectTitle,
        'projectDescription': projectDescription,
        'fileId': fileId,
        'githubLink': githubLink if githubLink else None
        }

        db['student_data'].insert_one(data)


    
    return "Hello"
    # return render_template("student_project.html")


    # project_data = request.get_json()
    # # Create a new project document (you may want to add validation and error handling)
    # project_id = mongo.db.projects.insert_one(project_data).inserted_id
    # return jsonify({"message": "Project added successfully", "project_id": str(project_id)}), 201

if __name__ == '__main__':
    app.run(debug=True)
