let obj = JSON.parse(body);
if(obj.woocommerce.memberships)
    obj.woocommerce.memberships = ["premium"];
body = JSON.stringify(obj);
$done({ body });
