// ================== DỮ LIỆU ==================

// Thông tin từng vị trí (object map: key là mã vị trí)
var positions = {
    GK: {
        name: "Thủ môn (GK)",
        star: "Hình mẫu: Manuel Neuer",
        desc: "Bạn điềm tĩnh, phản xạ tốt và là người nhìn toàn bộ sân. Bạn thích chỉ huy hàng thủ và chịu được áp lực khi mọi con mắt đổ dồn vào một pha cứu thua.",
        icon: "🧤",
        definition: "Thủ môn bảo vệ khung thành và là người duy nhất được dùng tay chơi bóng trong khu phạt đền của đội mình.",
        duties: ["Cản phá các cú sút và bảo vệ khung thành", "Chỉ huy, tổ chức hàng phòng ngự", "Phát động tấn công bằng ném hoặc chuyền bóng"],
        skills: ["Phản xạ", "Bắt bóng", "Chọn vị trí", "Giao tiếp"],
        pos: { "x": 50, "y": 92 },
        area: "Trước khung thành nhà, phía sau hàng phòng ngự."
    },
    CB: {
        name: "Trung vệ (CB)",
        star: "Hình mẫu: Virgil van Dijk",
        desc: "Bạn cứng rắn, đọc tình huống tốt và không ngại va chạm. Bạn là bức tường của đội: không chiến, kèm người và phá bóng là sở trường.",
        icon: "🛡️",
        definition: "Trung vệ chơi ở trung tâm hàng phòng ngự, bảo vệ khu vực trước khung thành và ngăn tiền đạo đối phương ghi bàn.",
        duties: ["Kèm tiền đạo và cắt đường chuyền nguy hiểm", "Tranh chấp, phá bóng và phòng ngự bóng bổng", "Bọc lót đồng đội, triển khai bóng từ tuyến dưới"],
        skills: ["Đọc tình huống", "Kèm người", "Không chiến"],
        pos: { "x": 50, "y": 78 },
        area: "Trung tâm hàng thủ, phía trước thủ môn."
    },
    RB: {
        name: "Hậu vệ phải (RB)",
        star: "Hình mẫu: Trent Alexander-Arnold",
        desc: "Bạn bền bỉ, vừa phòng ngự chắc vừa dám dâng cao hỗ trợ tấn công bên cánh phải. Chạy lên chạy xuống cả trận là chuyện bình thường.",
        icon: "🏃",
        definition: "Hậu vệ phải bảo vệ hành lang phải của đội, đồng thời dâng lên hỗ trợ tấn công khi có cơ hội.",
        duties: ["Ngăn đối thủ tiến công ở cánh phải", "Chạy chồng biên và tạt bóng cho đồng đội", "Lùi về bọc lót khi đội mất bóng"],
        skills: ["Thể lực", "Tốc độ", "Tạt bóng", "Phòng ngự 1–1"],
        pos: { "x": 85, "y": 70 },
        area: "Cánh phải hàng thủ, có thể dâng cao dọc đường biên."
    },
    LB: {
        name: "Hậu vệ trái (LB)",
        star: "Hình mẫu: Andy Robertson",
        desc: "Bạn bền bỉ, vừa phòng ngự chắc vừa dám dâng cao hỗ trợ tấn công bên cánh trái. Những pha tạt bóng và bám biên là thế mạnh của bạn.",
        icon: "🏃",
        definition: "Hậu vệ trái bảo vệ hành lang trái của đội và kết hợp với các cầu thủ phía trên để tấn công biên.",
        duties: ["Ngăn đối thủ tiến công ở cánh trái", "Chạy chồng biên và đưa bóng vào vòng cấm", "Lùi về giữ cự ly với các trung vệ"],
        skills: ["Thể lực", "Tốc độ", "Tạt bóng", "Phòng ngự 1–1"],
        pos: { "x": 15, "y": 70 },
        area: "Cánh trái hàng thủ, có thể dâng cao dọc đường biên."
    },
    DCM: {
        name: "Tiền vệ phòng ngự (DCM)",
        star: "Hình mẫu: N'Golo Kanté",
        desc: "Bạn là người thầm lặng che chắn cho hàng thủ: đánh chặn, cắt đường chuyền, thu hồi bóng rồi chuyền đơn giản cho đồng đội sáng tạo.",
        icon: "🔒",
        definition: "Tiền vệ phòng ngự đứng trước hàng thủ để đánh chặn, thu hồi và phân phối bóng. Đây là lớp che chắn quan trọng khi đối phương phản công.",
        duties: ["Cắt đường chuyền và thu hồi bóng", "Che chắn khoảng trống trước các trung vệ", "Chuyền bóng để đội duy trì và triển khai tấn công"],
        skills: ["Đọc trận đấu", "Đánh chặn", "Chuyền bóng", "Giữ vị trí"],
        pos: { "x": 50, "y": 62 },
        area: "Ở trung lộ, giữa hàng phòng ngự và tuyến tiền vệ."
    },
    CMF: {
        name: "Tiền vệ trung tâm (CMF)",
        star: "Hình mẫu: Luka Modrić",
        desc: "Bạn thông minh, chuyền bóng tốt và có mặt ở khắp nơi. Bạn là mắt xích kết nối hàng thủ với hàng công, điều tiết nhịp độ cả trận.",
        icon: "🧠",
        definition: "Tiền vệ trung tâm kết nối hàng thủ với hàng công, điều tiết nhịp chơi và hỗ trợ đội ở cả hai chiều tấn công lẫn phòng ngự.",
        duties: ["Luân chuyển bóng và kiểm soát nhịp độ", "Tạo lựa chọn chuyền bóng cho đồng đội", "Hỗ trợ phòng ngự và tham gia tấn công"],
        skills: ["Chuyền bóng", "Quan sát", "Thể lực", "Giữ bóng"],
        pos: { "x": 50, "y": 50 },
        area: "Khu vực trung tâm sân, di chuyển kết nối các tuyến."
    },
    AM: {
        name: "Tiền vệ tấn công (AM)",
        star: "Hình mẫu: Kevin De Bruyne",
        desc: "Bạn sáng tạo, tầm nhìn tốt và thích những đường chuyền quyết định. Bạn hoạt động ở khoảng trống giữa tuyến giữa và hàng thủ đối phương.",
        icon: "🎯",
        definition: "Tiền vệ tấn công hoạt động phía sau tiền đạo, tìm khoảng trống giữa các tuyến để kiến tạo và tạo cơ hội ghi bàn.",
        duties: ["Chuyền quyết định cho các tiền đạo", "Nhận bóng và xoay xở giữa các tuyến", "Dứt điểm khi có khoảng trống trước vòng cấm"],
        skills: ["Tầm nhìn", "Sáng tạo", "Chuyền quyết định", "Xử lý bóng"],
        pos: { "x": 50, "y": 36 },
        area: "Trung lộ phía trên tuyến giữa, sau hàng tiền đạo."
    },
    RW: {
        name: "Tiền đạo cánh phải (RW)",
        star: "Hình mẫu: Mohamed Salah",
        desc: "Bạn nhanh, rê dắt tốt và thích đối đầu 1-1 ở biên phải. Bạn tạo đột biến bằng tốc độ, kỹ thuật và những cú cắt vào trong dứt điểm.",
        icon: "⚡",
        definition: "Tiền đạo cánh phải tạo đột biến từ biên phải bằng tốc độ và kỹ thuật. Cầu thủ có thể bám biên hoặc cắt vào trong tùy chiến thuật.",
        duties: ["Vượt qua hậu vệ ở cánh phải", "Tạt bóng, căng ngang hoặc cắt vào dứt điểm", "Áp sát và hỗ trợ phòng ngự bên cánh"],
        skills: ["Tốc độ", "Rê bóng", "Dứt điểm", "Chuyền bóng"],
        pos: { "x": 85, "y": 24 },
        area: "Cánh phải hàng công, gần khu vực phòng ngự đối phương."
    },
    LW: {
        name: "Tiền đạo cánh trái (LW)",
        star: "Hình mẫu: Vinícius Júnior",
        desc: "Bạn nhanh, rê dắt tốt và thích đối đầu 1-1 ở biên trái. Bạn tạo đột biến bằng tốc độ, kỹ thuật và những pha bứt tốc ngoạn mục.",
        icon: "⚡",
        definition: "Tiền đạo cánh trái tạo đột biến từ biên trái bằng những pha đi bóng và bứt tốc. Cầu thủ có thể bám biên hoặc cắt vào trung lộ để ghi bàn.",
        duties: ["Vượt qua hậu vệ ở cánh trái", "Tạo cơ hội từ biên hoặc tự dứt điểm", "Áp sát và hỗ trợ phòng ngự bên cánh"],
        skills: ["Tốc độ", "Rê bóng", "Dứt điểm", "Chuyền bóng"],
        pos: { "x": 15, "y": 24 },
        area: "Cánh trái hàng công, gần khu vực phòng ngự đối phương."
    },
    SS: {
        name: "Hộ công (SS)",
        star: "Hình mẫu: Antoine Griezmann",
        desc: "Bạn linh hoạt, vừa biết kiến tạo vừa biết ghi bàn. Bạn đá lùi sau tiền đạo cắm, di chuyển thông minh để tạo khoảng trống cho cả đội.",
        icon: "🎭",
        definition: "Hộ công đá lùi phía sau tiền đạo cắm, kết nối lối chơi và chia sẻ nhiệm vụ ghi bàn. Vai trò này thường di chuyển linh hoạt quanh tiền đạo chính.",
        duties: ["Phối hợp và tạo cơ hội cho tiền đạo cắm", "Di chuyển vào khoảng trống để ghi bàn", "Kéo giãn hàng thủ và hỗ trợ áp sát"],
        skills: ["Di chuyển", "Phối hợp", "Dứt điểm", "Sáng tạo"],
        pos: { "x": 50, "y": 22 },
        area: "Ngay sau tiền đạo cắm, quanh rìa vòng cấm đối phương."
    },
    CF: {
        name: "Tiền đạo cắm (CF)",
        star: "Hình mẫu: Erling Haaland",
        desc: "Bạn lạnh lùng, quyết đoán và luôn có mặt đúng chỗ trong vòng cấm. Ghi bàn là nhiệm vụ số một và bạn thích điều đó.",
        icon: "🥅",
        definition: "Tiền đạo cắm chơi cao nhất ở trung lộ, là điểm đến của các pha tấn công. Nhiệm vụ chính là tận dụng cơ hội để ghi bàn.",
        duties: ["Chọn vị trí và dứt điểm trong vòng cấm", "Làm tường, phối hợp với các cầu thủ phía sau", "Gây sức ép và thu hút các trung vệ đối phương"],
        skills: ["Dứt điểm", "Chọn vị trí", "Làm tường", "Không chiến"],
        pos: { "x": 50, "y": 12 },
        area: "Trung tâm hàng công, gần khung thành đối phương nhất."
    }
};

// Danh sách câu hỏi. Mỗi đáp án có "scores": cộng điểm cho các vị trí
var questions = [
    {
        icon: "🛡️",
        text: "Khi đội vừa mất bóng, phản xạ đầu tiên của bạn là gì?",
        answers: [
            { text: "Lùi về giữ vị trí gần khung thành nhà", scores: { CB: 2, GK: 1 } },
            { text: "Chạy về chặn đường chuyền ở giữa sân", scores: { DCM: 2, CMF: 1 } },
            { text: "Ép ngay tại chỗ để đòi bóng lại", scores: { SS: 2, CF: 1, CMF: 1 } },
            { text: "Chạy dọc biên lùi về hỗ trợ", scores: { RB: 2, LB: 2, RW: 1, LW: 1 } }
        ]
    },
    {
        icon: "🔥",
        text: "Khoảnh khắc nào trong trận khiến bạn phấn khích nhất?",
        answers: [
            { text: "Cứu thua một cú sút cực khó", scores: { GK: 3 } },
            { text: "Xoạc bóng sạch sẽ, chặn đứng pha tấn công", scores: { CB: 2, DCM: 1, RB: 1, LB: 1 } },
            { text: "Một đường chuyền xé toang hàng thủ", scores: { AM: 2, CMF: 2, SS: 1 } },
            { text: "Đưa bóng vào lưới đối phương", scores: { CF: 3, SS: 1, RW: 1, LW: 1 } }
        ]
    },
    {
        icon: "🏃",
        text: "Thể chất của bạn thuộc dạng nào?",
        answers: [
            { text: "Phản xạ nhanh, nhảy tốt, rất bình tĩnh", scores: { GK: 2, CB: 1 } },
            { text: "Cao to, khỏe, tranh chấp tay đôi tốt", scores: { CB: 2, DCM: 1, CF: 1 } },
            { text: "Bền bỉ, chạy cả trận không mệt", scores: { CMF: 2, RB: 1, LB: 1, DCM: 1 } },
            { text: "Nhẹ người, bứt tốc nhanh", scores: { RW: 2, LW: 2, SS: 1 } }
        ]
    },
    {
        icon: "👟",
        text: "Chân thuận của bạn là chân nào?",
        answers: [
            { text: "Chân phải", scores: { RB: 1, RW: 1 } },
            { text: "Chân trái", scores: { LB: 1, LW: 1 } },
            { text: "Cả hai chân như nhau", scores: { CMF: 1, AM: 1, CB: 1 } }
        ]
    },
    {
        icon: "🎯",
        text: "Kỹ năng nào bạn tự tin nhất?",
        answers: [
            { text: "Bắt bóng, chọn vị trí, chỉ huy hàng thủ", scores: { GK: 2 } },
            { text: "Không chiến, kèm người, phá bóng", scores: { CB: 2, DCM: 1 } },
            { text: "Chuyền chính xác, đọc trận đấu", scores: { CMF: 2, DCM: 1, AM: 1 } },
            { text: "Rê dắt, đi bóng qua người", scores: { RW: 2, LW: 2, AM: 1 } },
            { text: "Dứt điểm, chọn vị trí trong vòng cấm", scores: { CF: 2, SS: 1 } }
        ]
    },
    {
        icon: "🌀",
        text: "Khi có bóng và bị đối phương áp sát, bạn sẽ làm gì?",
        answers: [
            { text: "Phá bóng hoặc sút dài lên cho an toàn", scores: { CB: 2, GK: 1 } },
            { text: "Chuyền lại cho đồng đội ở vị trí thoáng hơn", scores: { DCM: 2, CMF: 1, RB: 1, LB: 1 } },
            { text: "Xoay người giữ bóng, tìm đường chuyền xuyên tuyến", scores: { AM: 2, CMF: 1, SS: 1 } },
            { text: "Rê qua người hoặc sút luôn", scores: { RW: 1, LW: 1, SS: 1, CF: 1 } }
        ]
    },
    {
        icon: "📍",
        text: "Bạn thích hoạt động ở khu vực nào của sân?",
        answers: [
            { text: "Gần khung thành nhà", scores: { GK: 2, CB: 1 } },
            { text: "Dọc hai biên, chạy lên chạy xuống liên tục", scores: { RB: 2, LB: 2, RW: 1, LW: 1 } },
            { text: "Trung tâm sân, chỗ nào cũng có mặt", scores: { CMF: 2, DCM: 1 } },
            { text: "Khoảng trống giữa tuyến giữa và hàng thủ đối phương", scores: { AM: 2, SS: 1 } },
            { text: "Quanh vòng cấm đối phương", scores: { CF: 2, SS: 1 } }
        ]
    },
    {
        icon: "🤝",
        text: "Đồng đội thường nhận xét bạn là người như thế nào?",
        answers: [
            { text: "Điềm tĩnh, hay chỉ đạo, nói nhiều trong trận", scores: { GK: 2, CB: 1 } },
            { text: "Cứng rắn, thầm lặng, làm việc nặng nhọc", scores: { DCM: 2, CB: 1 } },
            { text: "Thông minh, nhìn xa, kết nối cả đội", scores: { CMF: 2, AM: 1 } },
            { text: "Sáng tạo, thích thể hiện, dám làm điều khác biệt", scores: { AM: 1, RW: 1, LW: 1, SS: 1 } },
            { text: "Lạnh lùng, quyết đoán trước khung thành", scores: { CF: 2, SS: 1 } }
        ]
    },
    {
        icon: "🏆",
        text: "Nếu được giao một nhiệm vụ, bạn muốn nhận nhiệm vụ nào?",
        answers: [
            { text: "Giữ sạch lưới, không để lọt bàn", scores: { GK: 2, CB: 1 } },
            { text: "Khóa chặt cầu thủ nguy hiểm nhất của đối phương", scores: { CB: 1, DCM: 1, RB: 1, LB: 1 } },
            { text: "Làm bộ não, kiểm soát tiết tấu cả trận", scores: { CMF: 2, DCM: 1, AM: 1 } },
            { text: "Tạo cơ hội cho tiền đạo ghi bàn", scores: { AM: 2, SS: 1, RW: 1, LW: 1 } },
            { text: "Là người kết thúc, chịu trách nhiệm ghi bàn", scores: { CF: 2, SS: 1 } }
        ]
    },
    {
        icon: "💨",
        text: "Bạn nghĩ sao về việc chạy 10 km mỗi trận?",
        answers: [
            { text: "Không thích, tôi muốn đứng đúng chỗ và làm đúng việc", scores: { GK: 2, CB: 1, CF: 1 } },
            { text: "Ổn, nhất là chạy lên chạy xuống ở hai cánh", scores: { RB: 2, LB: 2, RW: 1, LW: 1 } },
            { text: "Là sở trường, tôi muốn phủ khắp mặt sân", scores: { CMF: 2, DCM: 1 } },
            { text: "Chỉ chạy những pha bứt tốc ngắn nhưng quan trọng", scores: { CF: 1, SS: 1, AM: 1 } }
        ]
    },
    {
        icon: "⏱️",
        text: "Phút 85, đội bạn đang bị dẫn bàn. Bạn muốn làm gì?",
        answers: [
            { text: "Giữ vững hàng thủ, không để thua đậm hơn", scores: { CB: 1, GK: 1, DCM: 1 } },
            { text: "Dâng cao sát biên, liên tục tạt bóng vào vòng cấm", scores: { RB: 1, LB: 1, RW: 2, LW: 2 } },
            { text: "Cầm bóng, tìm đường chuyền quyết định", scores: { CMF: 1, AM: 2 } },
            { text: "Đứng sẵn trong vòng cấm chờ bóng để ghi bàn", scores: { CF: 2, SS: 1 } }
        ]
    },
    {
        icon: "⚽",
        text: "Phong cách chơi bóng nào giống bạn nhất?",
        answers: [
            { text: "An toàn, đơn giản, ít mắc lỗi", scores: { GK: 1, CB: 1, DCM: 1 } },
            { text: "Hy sinh, làm nền cho đồng đội tỏa sáng", scores: { DCM: 2, RB: 1, LB: 1 } },
            { text: "Điều tiết, phân phối bóng cho cả đội", scores: { CMF: 2, AM: 1 } },
            { text: "Liều lĩnh, tạo đột biến, dám làm khác", scores: { AM: 1, SS: 1, RW: 1, LW: 1 } },
            { text: "Thực dụng, hiệu quả, cứ có cơ hội là ghi bàn", scores: { CF: 2, SS: 1 } }
        ]
    }
];

// ================== BIẾN TOÀN CỤC ==================
var current = 0;    // đang ở câu số mấy (bắt đầu từ 0)
var total = {};     // tổng điểm của từng vị trí, ví dụ { GK: 3, CB: 5, ... }
var locked = false; // chặn bấm quá nhanh (double click)
var transitionTimer;
var flipTimer;
var confettiTimer;
var motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
var hoverQuery = window.matchMedia("(hover: hover)");
var cheers = ["Pha xử lý đẹp! ⚽", "Đúng chất cầu thủ!", "Wow, sút cái nào!", "Hay đấy! 🔥", "Chuẩn không cần chỉnh!", "Vào rồi!"];

// Đặt lại điểm của mọi vị trí về 0
function resetScore() {
    total = {};
    $.each(positions, function (key) {
        total[key] = 0;
    });
}

function capNhatTienDo() {
    $("#progress-bar").css("width", (current / questions.length) * 100 + "%");
    $(".progress-ball").css("--roll", current * 90 + "deg");
    $(".progress").attr({ "aria-valuenow": current, "aria-valuemax": questions.length });
    $("#progress-label").text(current + " / " + questions.length);
}

// Hiện câu hỏi, đánh dấu A/B/C để dễ theo dõi bằng mắt.
function showQuestion() {
    var q = questions[current];
    $("#question-count").text("Câu " + (current + 1) + "/" + questions.length);
    $("#question-text").text(q.text);
    $("#question-icon").text(q.icon);
    capNhatTienDo();
    $("#answers").empty();
    $.each(q.answers, function (i, a) {
        var button = $("<button>").addClass("answer").attr("type", "button").data("index", i);
        $("<span>").addClass("answer-letter").attr("aria-hidden", "true").text(String.fromCharCode(65 + i)).appendTo(button);
        $("<span>").addClass("answer-copy").text(a.text).appendTo(button);
        $("<span>").addClass("answer-arrow").attr("aria-hidden", "true").text("↗").appendTo(button);
        if (!motionQuery.matches) button.addClass("entering").css("--delay", i * 70 + "ms");
        button.appendTo("#answers");
    });
    $("#question-area").removeClass("question-out question-bounce question-in");
    if (!motionQuery.matches) $("#question-area").addClass("question-in");
    $("#question-text")[0].focus({ preventScroll: true });
}

// Nghiêng tối đa 8 độ; không chạy trên màn hình cảm ứng hoặc khi giảm chuyển động.
function nghiengThe3D(event, card) {
    if (!hoverQuery.matches || motionQuery.matches || locked || card.hasClass("entering")) return;
    var rect = card[0].getBoundingClientRect();
    var x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
    var y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
    card.css("transform", "rotateX(" + (-y * 8) + "deg) rotateY(" + (x * 8) + "deg) translateZ(8px)");
}

function bayBong(event, card) {
    if (motionQuery.matches) return;
    var rect = card[0].getBoundingClientRect();
    // Bấm bằng bàn phím thì bóng xuất phát từ giữa thẻ.
    var x = event.clientX || rect.left + rect.width / 2;
    var y = event.clientY || rect.top + rect.height / 2;
    var goal = $(".progress")[0].getBoundingClientRect();
    var dx = goal.right - x;
    var dy = goal.top - y;
    $("<span>").addClass("flying-ball").text("⚽").css({
        left: x - 15, top: y - 15,
        "--mid-x": dx * .45 + "px", "--mid-y": Math.min(-100, dy - 70) + "px",
        "--end-x": dx + "px", "--end-y": dy + "px"
    }).one("animationend", function () { $(this).remove(); }).appendTo("#effects");
}

function hienLoiCoVu() {
    if (motionQuery.matches) return;
    $(".fun-toast").remove();
    $("<span>").addClass("fun-toast").text(cheers[Math.floor(Math.random() * cheers.length)])
        .one("animationend", function () { $(this).remove(); }).appendTo("#effects");
}

function chonDapAn(card, event) {
    $(".answer").prop("disabled", true).removeClass("entering").css("transform", "");
    card.addClass("selected");
    $(".answer").not(card).addClass("receding");
    $("#question-area").removeClass("question-in");
    if (!motionQuery.matches) $("#question-area").addClass("question-bounce");
    bayBong(event, card);
    hienLoiCoVu();
}

function banPhaoGiay() {
    clearTimeout(confettiTimer);
    $("#confetti").empty();
    if (motionQuery.matches) return;
    var colors = ["#ffd45b", "#237348", "#fffefa", "#88ac84"];
    for (var i = 0; i < 42; i++) {
        $("<i>").addClass("confetti-piece").css({
            left: Math.random() * 100 + "%", background: colors[i % colors.length],
            "animation-delay": Math.random() * .35 + "s",
            "--drift": (Math.random() - .5) * 260 + "px",
            "--spin": (Math.random() - .5) * 1000 + "deg"
        }).appendTo("#confetti");
    }
    confettiTimer = setTimeout(function () { $("#confetti").empty(); }, 3000);
}

// Đổi y từ phần trăm sân sang đơn vị SVG (sân cao 150 đơn vị).
function hienVaiTro(best, code) {
    // Chỉ các vị trí này dùng ảnh; DCM là mã tiền vệ phòng ngự hiện tại.
    var playerImages = {
        GK: "./img/gk.png",
        DCM: "./img/dmf.png",
        CMF: "./img/cmf.png",
        RB: "./img/rb.png",
        LB: "./img/lb.png",
        AM: "./img/am.png",
        SS: "./img/ss.png",
        CF: "./img/cf.png",
        LW: "./img/lw.png",
        RW: "./img/rw.png",
        CB: "./img/cb.png",
    };
    $("#result-icon").empty();
    if (playerImages[code]) {
        $("<img>")
            .on("error", function () {
                // Chưa có ảnh thì vẫn hiện emoji, tránh hình bị vỡ.
                $(this).replaceWith(document.createTextNode(best.icon));
            })
            .attr({ src: playerImages[code], alt: "" })
            .appendTo("#result-icon");
    } else {
        $("#result-icon").text(best.icon);
    }
    $("#result-code").text(code);
    $("#role-definition").text(best.definition);
    $("#role-duties, #role-skills").empty();
    $.each(best.duties, function (i, duty) { $("<li>").text(duty).appendTo("#role-duties"); });
    $.each(best.skills, function (i, skill) { $("<span>").addClass("skill-chip").text(skill).appendTo("#role-skills"); });
    $("#position-description, #pitch-description").text(best.area);
    $("#pitch-title").text(best.name + " trên sân");
    var y = best.pos.y * 1.5;
    $("#pitch-dot, #pitch-pulse").attr({ cx: best.pos.x, cy: y });
    $("#pitch-label").attr({ x: best.pos.x, y: y - 9 }).text(code);
}

// Hiện kết quả: giữ nguyên cách sắp xếp và tỷ lệ điểm top 3.
function showResult() {
    var keys = Object.keys(total).sort(function (a, b) {
        return total[b] - total[a];
    });
    var best = positions[keys[0]];
    $("#result-name").text(best.name);
    $("#result-star").text(best.star);
    $("#result-desc").text(best.desc);
    hienVaiTro(best, keys[0]);
    $("#top3").empty();
    for (var i = 0; i < 3; i++) {
        var k = keys[i];
        var width = (total[k] / total[keys[0]]) * 100;
        $("#top3").append(
            '<div class="rank-row">' +
            "<span>" + positions[k].name + "</span>" +
            '<div class="bar"><div style="width:' + width + '%"></div></div>' +
            "<span>" + total[k] + " điểm</span>" +
            "</div>"
        );
    }
    $("#progress-bar").css("width", "100%");
    $("#quiz-box").hide();
    $(".container").removeClass("quiz-mode");
    $("#result-box").show().addClass("result-reveal");
    $("#quiz-status").text("Hoàn thành! Vị trí phù hợp nhất: " + best.name);
    $("#result-name")[0].focus({ preventScroll: true });
    window.scrollTo(0, 0);
    banPhaoGiay();
}

function resetHieuUng() {
    clearTimeout(transitionTimer);
    clearTimeout(flipTimer);
    clearTimeout(confettiTimer);
    $("#effects, #confetti").empty();
    $("#question-area").removeClass("question-in question-out question-bounce");
    $("#result-box").stop(true, true).removeClass("result-reveal");
    $("#answers, #top3").empty();
    $("#quiz-status").empty();
    locked = false;
}

// ================== JQUERY ==================
$(document).ready(function () {
    $("#quiz-box").hide();
    $("#result-box").hide();

    $("#btn-start").click(function () {
        // Chặn kích hoạt lại khi màn hình bắt đầu đã ẩn.
        if (!$("#start-box").is(":visible")) return;
        resetHieuUng();
        current = 0;
        resetScore();
        $("#start-box").hide();
        $(".container").addClass("quiz-mode");
        $("#quiz-box").show();
        showQuestion();
        window.scrollTo(0, 0);
    });

    $("#answers").on("click", ".answer", function (event) {
        if (locked) return;
        locked = true;
        // Cộng điểm NGAY và chỉ một lần, trước mọi hiệu ứng.
        var a = questions[current].answers[$(this).data("index")];
        $.each(a.scores, function (pos, point) {
            total[pos] += point;
        });
        chonDapAn($(this), event);
        current++;
        capNhatTienDo();
        // 420ms phản hồi + 220ms lật ra = 640ms khóa chọn.
        if (!motionQuery.matches) {
            flipTimer = setTimeout(function () {
                if (!motionQuery.matches) $("#question-area").removeClass("question-bounce").addClass("question-out");
            }, 420);
        }
        transitionTimer = setTimeout(function () {
            if (current < questions.length) {
                showQuestion();
                locked = false;
            } else {
                showResult();
            }
        }, 640);
    });

    $("#answers").on("mousemove", ".answer", function (event) { nghiengThe3D(event, $(this)); });
    $("#answers").on("mouseleave", ".answer", function () { $(this).css("transform", ""); });
    $("#answers").on("animationend", ".answer", function () { $(this).removeClass("entering"); });

    $("#btn-restart").click(function () {
        resetHieuUng();
        current = 0;
        resetScore();
        $("#result-box, #quiz-box").hide();
        $(".container").removeClass("quiz-mode");
        $("#start-box").show();
        capNhatTienDo();
        window.scrollTo(0, 0);
        $("#btn-start")[0].focus({ preventScroll: true });
    });

    // Đổi cài đặt hệ điều hành giữa lượt chơi vẫn dừng hiệu ứng ngay.
    function doiCheDoChuyenDong() {
        if (!motionQuery.matches) return;
        clearTimeout(flipTimer);
        clearTimeout(confettiTimer);
        $("#effects, #confetti").empty();
        $(".answer").removeClass("entering").css("transform", "");
        $("#question-area").removeClass("question-in question-out question-bounce");
    }
    if (motionQuery.addEventListener) motionQuery.addEventListener("change", doiCheDoChuyenDong);
    else motionQuery.addListener(doiCheDoChuyenDong); // Safari cũ
});
