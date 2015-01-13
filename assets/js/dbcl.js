( function ( $ ) {
    $( '#dbcl_form' ).submit( function ( e ) {
        e.preventDefault();
        var dbcl_data = {
            action: 'dbcl',
            dbcl_key: $( '#dbcl_key' ).val(),
            dbcl_group: $( '#dbcl_group' ).val(),
            security: dbcl.security
        }
        $.post( ajaxurl, dbcl_data, function ( res ) {
            if (true === res.success){
               $('#dbcl_results').html(res.data.cache);
            }else{
                alert('No cache data found.');
            }
        } );
    } )
} )( jQuery );