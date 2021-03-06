FROM wordpress:php7.4-fpm

# install_wordpress.sh & misc. dependencies
RUN apt-get update && \
	apt-get install -yq mariadb-client netcat sudo less git unzip wget

# wp-cli
RUN curl -sL https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar -o wp; \
	chmod +x wp; \
	mv wp /usr/local/bin/; \
	mkdir /var/www/.wp-cli; \
	chown www-data:www-data /var/www/.wp-cli

# ensure wordpress has write permission on linux host https://github.com/postlight/headless-wp-starter/issues/202
RUN sudo chown -R www-data:www-data /var/www/html 
RUN sudo chmod -R 0777 /var/www/html/


# include composer-installed executables in $PATH
ENV PATH="/var/www/.composer/vendor/bin:${PATH}"

EXPOSE 9000





