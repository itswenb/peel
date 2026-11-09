package org.mozilla.geckoview;

// GeckoView 持有唯一的 GeckoDisplay；同包访问避免重复获取显示器。
public final class PeelSafeArea {
    private PeelSafeArea() {}

    /** 将系统栏安全区发送给当前显示器。 / Sends system bar insets to the active display. */
    public static void update(GeckoSession session, int top, int right, int bottom, int left) {
        GeckoDisplay display = session.getDisplay();
        if (display != null) display.safeAreaInsetsChanged(top, right, bottom, left);
    }
}
