document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Quiz Logic
    const questions = [
        {
            question: "ປະໂຫຍກ 'ສຶມມ່າຍເລິ' (Smmaay le'.) ໃນພາສາກຶມມຸ ໝາຍຄວາມວ່າແນວໃດ?",
            options: [
                "ຂອບໃຈ",
                "ສະບາຍດີ",
                "ລາກ່ອນ",
                "ເຈົ້າຊື່ຫຍັງ?"
            ],
            answer: "ສະບາຍດີ",
            explanation: "ສຶມມ່າຍເລິ ເປັນຄຳທັກທາຍພື້ນຖານ ໝາຍເຖິງ ສະບາຍດີ."
        },
        {
            question: "ຄຳວ່າ 'ໂອຣັກບາ' (O-rak-ba.) ໝາຍຄວາມວ່າແນວໃດ?",
            options: [
                "ຂ້ອຍກິນເຂົ້າ",
                "ຂ້ອຍຮັກເຈົ້າ",
                "ຂ້ອຍໄປ",
                "ຂ້ອຍເຈັບຫົວ"
            ],
            answer: "ຂ້ອຍຮັກເຈົ້າ",
            explanation: "ໂອຣັກບາ ໝາຍເຖິງ ຂ້ອຍຮັກເຈົ້າ."
        },
        {
            question: "ໃນປະໂຫຍກ 'ບາ ເບິຫມາະ' (Ba bəʔ mɑʔ.), 'ບາ' (ba) ໃຊ້ແທນໃຜ?",
            options: [
                "ຂ້ອຍ (I)",
                "ລາວ (ຜູ້ຊາຍ)",
                "ລາວ (ຜູ້ຍິງ)",
                "ພວກເຂົາ"
            ],
            answer: "ລາວ (ຜູ້ຍິງ)",
            explanation: "ບາ (ba) ໃຊ້ແທນຄຳວ່າ 'ລາວ' ທີ່ເປັນຜູ້ຍິງ (third person feminine)."
        },
        {
            question: "ຄຳໃດໃນພາສາກຶມມຸທີ່ໃຊ້ແທນຄຳວ່າ 'ລາວ' ທີ່ເປັນຜູ້ຊາຍ?",
            options: [
                "ໂອະ (ʔoʔ)",
                "ບາ (ba)",
                "ເມ (mɛ)",
                "ນາ (na)"
            ],
            answer: "ເມ (mɛ)",
            explanation: "ເມ (mɛ) ໃຊ້ແທນຄຳວ່າ 'ລາວ' ທີ່ເປັນຜູ້ຊາຍ (third person masculine)."
        },
        {
            question: "ປະໂຫຍກ 'ໂອະ ເບິຫມາະ' (ʔoʔ bəʔ mɑʔ.) ໝາຍເຖິງຫຍັງ?",
            options: [
                "ຂ້ອຍດື່ມນ້ຳ",
                "ຂ້ອຍນອນ",
                "ຂ້ອຍກິນເຂົ້າ",
                "ຂ້ອຍຫິວ"
            ],
            answer: "ຂ້ອຍກິນເຂົ້າ",
            explanation: "ໂອະ ເບິຫມາະ ໝາຍເຖິງ ຂ້ອຍກິນເຂົ້າ."
        },
        {
            question: "ປະໂຫຍກ 'ນາ ເອືອກອົມ' (Na əək om.) ໝາຍເຖິງຫຍັງ?",
            options: [
                "ລາວ(ຊາຍ) ດື່ມນ້ຳ",
                "ນາງ(ຍິງ) ດື່ມນ້ຳ",
                "ພວກເຂົາ ດື່ມນ້ຳ",
                "ເຈົ້າ ດື່ມນ້ຳ"
            ],
            answer: "ນາງ(ຍິງ) ດື່ມນ້ຳ",
            explanation: "ນາ (na) ໃຊ້ແທນຄຳວ່າ 'ນາງ' ທີ່ເປັນຜູ້ຍິງ (third person feminine, ມັກໃຊ້ກັບຊື່ ຫຼື ສະເພາະເຈາະຈົງກວ່າ) ແລະ ເອືອກອົມ ໝາຍເຖິງດື່ມນ້ຳ."
        },
        {
            question: "ປະໂຫຍກ 'ເມ ຫຍໍະຫລາະ' (Mɛ yɔʔ hlaʔ.) ໝາຍຄວາມວ່າແນວໃດ?",
            options: [
                "ລາວ(ຍິງ) ໄປໂຮງຮຽນ",
                "ລາວ(ຊາຍ) ໄປຫຼິ້ນ",
                "ຂ້ອຍໄປ",
                "ພວກເຂົາໄປ"
            ],
            answer: "ລາວ(ຊາຍ) ໄປຫຼິ້ນ",
            explanation: "ເມ ຫຍໍະຫລາະ ໝາຍເຖິງ ລາວ(ຊາຍ) ໄປຫຼິ້ນ."
        },
        {
            question: "ຖ້າທ່ານຕ້ອງການເວົ້າວ່າ 'ຂ້ອຍເຈັບຫົວ' ໃນພາສາກຶມມຸ ທ່ານຈະເວົ້າແນວໃດ?",
            options: [
                "ໂອະ ເບິຫມາະ.",
                "ໂອະ ຈຸກຶມປົງ.",
                "ໂອະ ຫຍໍະ.",
                "ໂອະ ເອືອກອົມ."
            ],
            answer: "ໂອະ ຈຸກຶມປົງ.",
            explanation: "ໂອະ ຈຸກຶມປົງ. ໝາຍເຖິງ ຂ້ອຍເຈັບຫົວ."
        },
        {
            question: "ປະໂຫຍກ 'ໂອະ ຢັດດະເຫມີະ?' (ʔoʔ yat dəmə?) ມັກຈະໃຊ້ຖາມວ່າຫຍັງ?",
            options: [
                "ເຈົ້າສະບາຍດີບໍ່?",
                "ເຈົ້າກິນເຂົ້າແລ້ວບໍ່?",
                "ຂ້ອຍຄວນຈະຢູ່ໃສ ຫຼື ຂ້ອຍຄວນໄປໃສ",
                "ເຈົ້າໄປໃສມາ?"
            ],
            answer: "ຂ້ອຍຄວນຈະຢູ່ໃສ ຫຼື ຂ້ອຍຄວນໄປໃສ",
            explanation: "ໂອະ ຢັດດະເຫມີະ? ມັກຈະໃຊ້ຖາມວ່າ 'ຂ້ອຍຄວນຈະຢູ່ໃສ' ຫຼື 'ຂ້ອຍຄວນໄປໃສ'."
        },
        {
            question: "ຄຳວ່າ 'ນາ' (na) ມີຄວາມແຕກຕ່າງຈາກ 'ບາ' (ba) ແນວໃດ ເມື່ອໃຊ້ແທນຜູ້ຍິງ?",
            options: [
                " 'ນາ' ໃຊ້ກັບຜູ້ຍິງທີ່ອາຍຸຫຼາຍກວ່າ, 'ບາ' ໃຊ້ກັບຜູ້ຍິງທີ່ອາຍຸນ້ອຍກວ່າ",
                " 'ນາ' ໃຊ້ແທນ 'ນາງ' (her) ມັກໃຊ້ກັບຊື່ ຫຼື ສະເພາະເຈາະຈົງກວ່າ, 'ບາ' ໃຊ້ໂດຍລວມ",
                " 'ນາ' ໃຊ້ແທນຜູ້ຍິງທີ່ເປັນໝູ່, 'ບາ' ໃຊ້ແທນຜູ້ຍິງທີ່ເປັນຄອບຄົວ",
                "ບໍ່ມີຄວາມແຕກຕ່າງກັນ"
            ],
            answer: " 'ນາ' ໃຊ້ແທນ 'ນາງ' (her) ມັກໃຊ້ກັບຊື່ ຫຼື ສະເພາະເຈາະຈົງກວ່າ, 'ບາ' ໃຊ້ໂດຍລວມ",
            explanation: "ນາ (na) ໃຊ້ແທນຄຳວ່າ 'ນາງ' ທີ່ເປັນຜູ້ຍິງ (third person feminine, ມັກໃຊ້ກັບຊື່ ຫຼື ສະເພາະເຈາະຈົງກວ່າ), ໃນຂະນະທີ່ ບາ (ba) ໃຊ້ແທນ 'ລາວ' ທີ່ເປັນຜູ້ຍິງໂດຍລວມ."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const quizContainer = document.getElementById('quiz-container');
    const quizResults = document.getElementById('quiz-results');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');

    startQuizBtn.addEventListener('click', startQuiz);
    restartQuizBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizResults.style.display = 'none';
        quizContainer.style.display = 'block';
        totalQuestionsSpan.textContent = questions.length;
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions
            quizContainer.innerHTML = `
                <div class="quiz-question">
                    <h3>${q.question}</h3>
                    <ul class="quiz-options">
                        ${q.options.map(option => `<button>${option}</button>`).join('')}
                    </ul>
                    <div class="feedback"></div>
                    <button id="next-question-btn" style="display:none;">ຄຳຖາມຕໍ່ໄປ</button>
                </div>
            `;
            const optionButtons = quizContainer.querySelectorAll('.quiz-options button');
            optionButtons.forEach(button => {
                button.addEventListener('click', selectAnswer);
            });
        } else {
            showResults();
        }
    }

    function selectAnswer(event) {
        const selectedButton = event.target;
        const userAnswer = selectedButton.textContent;
        const currentQuestion = questions
        const feedbackDiv = quizContainer.querySelector('.feedback');
        const nextBtn = document.getElementById('next-question-btn');
        const optionButtons = quizContainer.querySelectorAll('.quiz-options button');

        optionButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct');
            } else {
                button.classList.add('wrong');
            }
        });

        if (userAnswer === currentQuestion.answer) {
            score++;
            feedbackDiv.textContent = "ຖືກຕ້ອງ! 👍";
            feedbackDiv.classList.remove('wrong');
            feedbackDiv.classList.add('correct');
        } else {
            feedbackDiv.textContent = `ຜິດ! ຄຳຕອບທີ່ຖືກຕ້ອງແມ່ນ: "${currentQuestion.answer}". ${currentQuestion.explanation}`;
            feedbackDiv.classList.remove('correct');
            feedbackDiv.classList.add('wrong');
        }
        nextBtn.style.display = 'block';
        nextBtn.addEventListener('click', nextQuestion);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    function showResults() {
        quizContainer.style.display = 'none';
        quizResults.style.display = 'block';
        scoreSpan.textContent = score;
    }

    // Initial load: show start button
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
});
