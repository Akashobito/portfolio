const topicLink = document.querySelectorAll('.js-topic');
    topicLink.forEach(function(topic){
        // console.log(topic.innerHTML);
        topic.addEventListener('click',function(){
            console.log(topic.innerHTML);
            console.log(topic.classList.contains('check'));
            if(topic.classList.contains('check')){
                topic.classList.add('topic-after');
                topic.classList.remove('check');
            }else{
                topic.classList.remove('topic-after');
                topic.classList.add('check');
            }
        })
    })