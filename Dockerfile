FROM eclipse-temurin:25-jdk
WORKDIR /app
COPY target/manzione-properties.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
