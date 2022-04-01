Run zipkin on heroku <br>

Procfile:
<code>
web: java -jar libs/zipkin-server-2.23.16.jar --armeria.ports[0].port=$PORT
</code>