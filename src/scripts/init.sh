SOURCE_DIR="./"
DOCKER_CONTEXT_DIR="./"

# Copy files to the Docker context directory
cp -r "$SOURCE_DIR"/* "$DOCKER_CONTEXT_DIR"/

# Change to the Docker context directory
cd "$DOCKER_CONTEXT_DIR" || exit

docker-compose -f docker-compose.yaml up --build

