import $ from 'jquery';

$(function() {
    $(".sidebar-item").on('click', function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        $('.content').not(target).hide();
        $(target).fadeIn(600);
    });


    $('#toggle-left-menu').on('click' ,function() {
        if ($('#left-menu').hasClass('small-left-menu')) {
            $('#left-menu').removeClass('small-left-menu');
        } else {
            $('#left-menu').addClass('small-left-menu');
        }
        $('#logo').toggleClass('small-left-menu');
        $('#page-container').toggleClass('small-left-menu');
        $('#header .header-left').toggleClass('small-left-menu');

        $('#logo .big-logo').toggle('300');
        $('#logo .small-logo').toggle('300');
        $('#logo').toggleClass('p-0 pl-1');
        $('li h3').toggleClass('hidden');
    });

    $(document).on('mouseover', '#left-menu.small-left-menu > ul > li', function() {
        if (!$(this).hasClass('has-sub')) {
            let label = $(this).find('span').text();
            let position = $(this).position();
            $('#show-lable').css({
                'top': position.top + 79,
                'left': position.left + 59,
                'opacity': 1,
                'visibility': 'visible'
            });

            $('#show-lable').text(label);
        } else {
            let position = $(this).position();
            $(this).find('ul').addClass('open');

            if ($(this).find('ul').hasClass('open')) {
                const height = 47;
                let count_submenu_li = $(this).find('ul > li').length;
                if (position.top >= 580) {
                    let style = {
                        'top': (position.top + 100) - (height * count_submenu_li),
                        'height': height * count_submenu_li + 'px'
                    }
                    $(this).find('ul.open').css(style);
                } else {
                    let style = {
                        'top': position.top + 79,
                        'height': height * count_submenu_li + 'px'
                    }

                    $(this).find('ul.open').css(style);
                }
            }
        }
    });

    $(document).on('mouseout', '#left-menu.small-left-menu li a', function(e) {
        $('#show-lable').css({
            'opacity': 0,
            'visibility': 'hidden'
        });
    });

    $(document).on('mouseout', '#left-menu.small-left-menu li.has-sub', function(e) {
        $(this).find('ul').css({
            'height': 0,
        });
    });

    $(window).resize(function() {
        windowResize();
    });

    $(window).on('load', function() {
        windowResize();
    });

    $('#left-menu li.has-sub > a').on('click', function() {
        let _this = $(this).parent();

        _this.find('ul').toggleClass('open');
        $(this).closest('li').toggleClass('rotate');

        _this.closest('#left-menu').find('.open').not(_this.find('ul')).removeClass('open');
        _this.closest('#left-menu').find('.rotate').not($(this).closest('li')).removeClass('rotate');
        _this.closest('#left-menu').find('ul').css('height', 0);

        if (_this.find('ul').hasClass('open')) {
            const height = 47;
            let count_submenu_li = _this.find('ul > li').length;
            _this.find('ul').css('height', height * count_submenu_li + 'px');
        }
    });

    $('#left-menu ul li').on('click', function() {
        let clickedId = $(this).attr('id');
    
        let contentId = 'content-' + clickedId;
    
        $('#left-menu ul li, .page').removeClass('active');
    
        $(this).addClass('active');
        $('#' + contentId).addClass('active');
    });

    $('.trash-user').on('click', function() {
        let userId = $(this).attr('data-id');
    
        let isConfirmed = confirm('¿Estás seguro de que quieres eliminar este usuario?');
    
        if (isConfirmed) {
            $.ajax({
                url: '/delete_user/' + userId,
                type: 'DELETE',
                success: function(result) {
                    $('button[data-id="' + userId + '"]').parents('tr').remove();
                }
            });
        }
    });

    $("#addCategory").on('click', function(){
        let categoryName = $("#category").val();
        if(categoryName) {
            $.ajax({
                url: "/register/categories",
                type: "POST",
                data: {
                    category: categoryName
                },
                success: function (data) {
                    // Suponiendo que data contiene el nuevo objeto categoría
                    let newRow = $("<tr>");
                    let cols = "";
    
                    cols += '<td data-label="ID">' + data.id + '</td>';
                    cols += '<td data-label="Name">' + data.category + '</td>';
                    cols += `<td data-label="">
                        <button class="btn edit-category" data-id="${data.id}">
                            <span class="material-icons">
                                edit
                            </span>
                        </button>
                        <button class="btn trash-category" data-id="${data.id}">
                            <span class="material-icons">
                                delete_forever
                            </span>
                        </button>
                    </td>`;
    
                    newRow.append(cols);
                    $("table").append(newRow);
                    $("#category").val('');
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(thrownError);
                }
            });
        } else {
            alert('Please enter a category name');
        }
    });

    $('.trash-category').on('click', function() {
        let userId = $(this).attr('data-id');
    
        let isConfirmed = confirm('¿Estás seguro de que quieres eliminar este usuario?');
    
        if (isConfirmed) {
            $.ajax({
                url: '/delete_category/' + userId,
                type: 'DELETE',
                success: function(result) {
                    $('button[data-id="' + userId + '"]').parents('tr').remove();
                }
            });
        }
    });

    function windowResize() {
        let width = $(window).width();
        if (width <= 992) {
            $('#left-menu').addClass('small-left-menu');
            $('#logo').addClass('small-left-menu p-0 pl-1');
        } else {
            $('#left-menu').removeClass('small-left-menu');
            $('#logo').removeClass('small-left-menu p-0 pl-1');
        }
    }

});
