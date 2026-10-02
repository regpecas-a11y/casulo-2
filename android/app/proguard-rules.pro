# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Capacitor ProGuard Rules
-keep class com.getcapacitor.** { *; }
-keep class com.casulo.app.** { *; }
-keep interface com.getcapacitor.** { *; }
-keepattributes *Annotation*
-keepattributes EnclosingMethod
-keepattributes Signature
-keepattributes InnerClasses

# Google Services / Firebase (if used)
-keep class com.google.firebase.** { *; }
-keep class com.google.android.gms.** { *; }

# Prevent obfuscation of Capacitor plugin methods
-keepclassmembers class * extends com.getcapacitor.Plugin {
    @com.getcapacitor.PluginMethod public void *(com.getcapacitor.PluginCall);
}

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}

# Uncomment this to preserve the line number information for
# debugging stack traces.
-keepattributes SourceFile,LineNumberTable

# If you keep the line number information, uncomment this to
# hide the original source file name.
#-renamesourcefileattribute SourceFile
