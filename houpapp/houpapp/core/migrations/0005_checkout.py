# Generated by Django 3.0.3 on 2020-04-13 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_auto_20200409_1444'),
    ]

    operations = [
        migrations.CreateModel(
            name='CheckOut',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=100)),
                ('api_key', models.CharField(max_length=100)),
                ('source_id', models.CharField(max_length=100)),
                ('target_type', models.CharField(max_length=20)),
                ('target_id', models.CharField(max_length=20)),
                ('card_name', models.CharField(max_length=30)),
            ],
        ),
    ]
