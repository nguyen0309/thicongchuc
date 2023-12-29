server {
    listen 80;

       server_name thicongchuc24h.com;

       root /home/thicongchuc/dist;
       index index.html;

       location / {
               try_files $uri $uri/ =404;
       }

}
