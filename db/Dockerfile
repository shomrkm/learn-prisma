FROM postgis/postgis:14-3.3

# The files in the "docker-entrypoint-initdb.d" directory are executed automatically in alphabetical order by the official PostgreSQL image.
# Our base image "postgis/postgis" also includes the file "10_postgis.sh" in this directory for creating PostGIS-supported database templates.
# To ensure that our desired script is executed after "10_postgis.sh", we rename it to "11_init.sql".
COPY ./init.sql /docker-entrypoint-initdb.d/11_init.sql
