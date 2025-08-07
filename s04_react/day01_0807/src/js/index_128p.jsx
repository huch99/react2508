function index_128p() {
    const element = {
        type: 'div',
        props: {
            children: [
                {
                    type: 'p',
                    props: {
                        children: '내용을 확인하셨으면 확인 버튼을 눌러주세요.'
                    }
                },
                {
                    type: 'button',
                    props: {
                        className: 'bg-red',
                        children: {
                            type: 'b',
                            props: {
                                children: '확인'
                            }
                        }
                    }
                }
            ]
        }
    }
}

export default index_128p;