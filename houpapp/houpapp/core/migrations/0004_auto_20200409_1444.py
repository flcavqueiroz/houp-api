# Generated by Django 3.0.3 on 2020-04-09 14:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_auto_20200316_1207'),
    ]

    operations = [
        migrations.RenameField(
            model_name='price',
            old_name='first_value',
            new_name='dois_ambientes',
        ),
        migrations.RenameField(
            model_name='price',
            old_name='second_value',
            new_name='tres_ambientes',
        ),
        migrations.RenameField(
            model_name='price',
            old_name='third_value',
            new_name='um_ambiente',
        ),
    ]
