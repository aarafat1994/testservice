# Use an OpenJDK base image
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy the application JAR
COPY target/testservice-0.0.1-SNAPSHOT.jar app.jar

# Expose port
EXPOSE 8089

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
