# Generated by Django 3.1.7 on 2021-04-07 08:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('django_app', '0002_banner_cooporate_news_notice_product_product_detail_product_summary'),
    ]

    operations = [
        migrations.AlterField(
            model_name='qna_answer',
            name='question_number',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='django_app.qna_question'),
        ),
    ]
